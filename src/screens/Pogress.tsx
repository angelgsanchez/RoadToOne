import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(255, 71, 87, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
};

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            data: [45, 30, 60, 45, 75, 60, 45],
            color: (opacity = 1) => `rgba(255, 71, 87, ${opacity})`,
            strokeWidth: 2,
        },
    ],
};

const stats = [
    { title: 'Workouts', value: '12', unit: 'sessions' },
    { title: 'Total Time', value: '6.5', unit: 'hours' },
    { title: 'Calories', value: '3,250', unit: 'kcal' },
    { title: 'Best Streak', value: '8', unit: 'days' },
];

export default function Progress() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Your Progress</Text>
                <Text style={styles.subtitle}>Weekly Activity</Text>
            </View>

            <View style={styles.chartCard}>
                <LineChart
                    data={data}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                    style={styles.chart}
                />
            </View>

            <View style={styles.statsGrid}>
                {stats.map((stat, index) => (
                    <View key={index} style={styles.statCard}>
                        <Text style={styles.statValue}>{stat.value}</Text>
                        <Text style={styles.statTitle}>{stat.title}</Text>
                        <Text style={styles.statUnit}>{stat.unit}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.achievementsSection}>
                <Text style={styles.sectionTitle}>Recent Achievements</Text>
                <View style={styles.achievementCard}>
                    <View style={styles.achievementIcon}>
                        <Text style={styles.achievementEmoji}>🏃‍♂️</Text>
                    </View>
                    <View style={styles.achievementInfo}>
                        <Text style={styles.achievementTitle}>5K Runner</Text>
                        <Text style={styles.achievementDesc}>Completed first 5K run</Text>
                    </View>
                </View>
                <View style={styles.achievementCard}>
                    <View style={styles.achievementIcon}>
                        <Text style={styles.achievementEmoji}>💪</Text>
                    </View>
                    <View style={styles.achievementInfo}>
                        <Text style={styles.achievementTitle}>Strength Master</Text>
                        <Text style={styles.achievementDesc}>10 strength workouts completed</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        padding: 20,
        paddingTop: 60,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    chartCard: {
        backgroundColor: '#fff',
        margin: 20,
        padding: 15,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    chart: {
        marginVertical: 8,
        borderRadius: 16,
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    },
    statCard: {
        width: '45%',
        backgroundColor: '#fff',
        padding: 20,
        margin: '2.5%',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF4757',
        marginBottom: 4,
    },
    statTitle: {
        fontSize: 16,
        color: '#1a1a1a',
        marginBottom: 2,
    },
    statUnit: {
        fontSize: 14,
        color: '#666',
    },
    achievementsSection: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#1a1a1a',
    },
    achievementCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
        }
    }
}
)