import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";

const Settings = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
    const [language, setLanguage] = useState("English");

    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
    const toggleNotifications = () => setIsNotificationsEnabled((prev) => !prev);
    const changeLanguage = () => setLanguage(language === "English" ? "فارسی" : "English");

    return (
        <View style={[styles.container, isDarkMode && styles.darkContainer]}>
            <Text style={[styles.title, isDarkMode && styles.darkText]}>Settings</Text>

            {/* دارک مود */}
            <View style={styles.settingRow}>
                <Text style={[styles.label, isDarkMode && styles.darkText]}>Dark Mode</Text>
                <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
            </View>

            {/* اعلان‌ها */}
            <View style={styles.settingRow}>
                <Text style={[styles.label, isDarkMode && styles.darkText]}>Enable Notifications</Text>
                <Switch value={isNotificationsEnabled} onValueChange={toggleNotifications} />
            </View>

            {/* تغییر زبان */}
            <TouchableOpacity style={styles.button} onPress={changeLanguage}>
                <Text style={styles.buttonText}>Change Language ({language})</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f9fa",
    },
    darkContainer: {
        backgroundColor: "#121212",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    darkText: {
        color: "#fff",
    },
    settingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    label: {
        fontSize: 18,
    },
    button: {
        marginTop: 20,
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
