import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Settings, Bell, Heart, Award } from 'lucide-react-native';

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960' }}
                    style={styles.profileImage}
                />
                <Text style={styles.name}>Alex Johnson</Text>
                <Text style={styles.bio}>Entusiasta del fitness | Corredor</Text>

                <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>156</Text>
                        <Text style={styles.statLabel}>Entrenamientos</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>28</Text>
                        <Text style={styles.statLabel}>Siguiendo</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>42</Text>
                        <Text style={styles.statLabel}>Seguidores</Text>
                    </View>
                </View>
            </View>

            <View style={styles.menuSection}>
                <TouchableOpacity style={styles.menuItem}>
                    <Settings size={24} color="#666" />
                    <Text style={styles.menuText}>Configuracion</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Bell size={24} color="#666" />
                    <Text style={styles.menuText}>Notificaciones</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Heart size={24} color="#666" />
                    <Text style={styles.menuText}>Entrenamientos favoritos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Award size={24} color="#666" />
                    <Text style={styles.menuText}>Logros</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Salir</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 60,
        alignItems: 'center',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 5,
    },
    bio: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF4757',
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
    },
    statDivider: {
        width: 1,
        height: 40,
        backgroundColor: '#eee',
    },
    menuSection: {
        backgroundColor: '#fff',
        marginTop: 20,
        paddingVertical: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    menuText: {
        fontSize: 16,
        color: '#1a1a1a',
        marginLeft: 15,
    },
    logoutButton: {
        margin: 20,
        backgroundColor: '#FF4757',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
    },
    logoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});