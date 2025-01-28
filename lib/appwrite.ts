import {
  Account,
  Avatars,
  Client,
  Databases,
  OAuthProvider,
  Query,
} from "react-native-appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
export const config = {
  platform: "com.alirezatalebizadeh.HomeShop",
  endpoint: `${process.env.EXPO_PUBLIC_APPWRITE_APPWRITE_ENDPOINT}`,
  projectId: `${process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID}`,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_APPWRITE_DATABASE_ID,
  galleriesCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_APPWRITE_GALLORIES_COLLECTIONS_ID,
  reviewsCollectionsId:
    process.env.EXPO_PUBLIC_APPWRITE_APPWRITE_REVIEWS_COLLECTIONS_ID,
  propertiesCollectionsId:
    process.env.EXPO_PUBLIC_APPWRITE_APPWRITE_PROPERTIES_COLLECTION_ID,
  agentCollectionsId:
    process.env.EXPO_PUBLIC_APPWRITE_APPWRITE_AGENTS_COLLECTIONS_ID,
};

export const client = new Client();
client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

export const avatar = new Avatars(client);
export const account = new Account(client);
export const databases = new Databases(client);

//!Login
export async function login() {
  try {
    //! ایجاد توکن OAuth
    const redirectUri = Linking.createURL("/");
    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );
    if (!response)
      throw new Error("ایجاد توکن OAuth2 از گوگل با شکست مواجه شد");

    // باز کردن جلسه احراز هویت
    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );
    if (browserResult.type !== "success") {
      throw new Error(`خطا در احراز هویت: وضعیت ${browserResult.type}`);
    }

    // استخراج پارامترها از URL
    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();
    if (!secret || !userId)
      throw new Error("پارامترهای OAuth در URL ردirection وجود ندارند");

    // ایجاد جلسه
    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("ایجاد جلسه با اطلاعات کاربر ناموفق بود");

    return true;
  } catch (error) {
    console.error(`خطا در فرآیند ورود: ${error}`);
    return false;
  }
}

//!Log out
export async function logout() {
  try {
    const result = await account.deleteSession("current");
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getCurrentUser() {
  try {
    const result = await account.get();
    if (result.$id) {
      const userAvatar = avatar.getInitials(result.name);

      return {
        ...result,
        avatar: userAvatar.toString(),
      };
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getLatestProperties() {
  try {
    const result = await databases.listDocuments(
      config.databaseId!,
      config.propertiesCollectionsId!,
      [Query.orderAsc("$createdAt"), Query.limit(5)]
    );

    return result.documents;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProperties({
  filter,
  query,
  limit,
}: {
  filter: string;
  query: string;
  limit?: number;
}) {
  try {
    const buildQuery = [Query.orderDesc("$createdAt")];

    if (filter && filter !== "All")
      buildQuery.push(Query.equal("type", filter));

    if (query)
      buildQuery.push(
        Query.or([
          Query.search("name", query),
          Query.search("address", query),
          Query.search("type", query),
        ])
      );

    if (limit) buildQuery.push(Query.limit(limit));

    const result = await databases.listDocuments(
      config.databaseId!,
      config.propertiesCollectionsId!,
      buildQuery
    );

    return result.documents;
  } catch (error) {
    console.log("get Properties", error);
    return [];
  }
}

// write function to get property by id
export async function getPropertyById({ id }: { id: string }) {
  try {
    const result = await databases.getDocument(
      config.databaseId!,
      config.propertiesCollectionsId!,
      id
    );
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
