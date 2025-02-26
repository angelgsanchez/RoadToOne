import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

const categories = [
    { id: 1, name: 'Todo' },
    { id: 2, name: 'Fuerza' },
    { id: 3, name: 'Cardio' },
    { id: 4, name: 'Yoga' },
    { id: 5, name: 'HIIT' },
];

const workouts = [
    {
        id: 1,
        title: 'Poder de la parte superior del cuerpo',
        category: 'Fuerza',
        duration: '50 min',
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2940',
    },
    {
        id: 2,
        title: 'Explosión cardiovascular',
        category: 'Cardio',
        duration: '30 min',
        image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2940',
    },
    {
        id: 3,
        title: 'Flujo de yoga',
        category: 'Yoga',
        duration: '45 min',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2940',
    },
    {
        id: 4,
        title: 'Desafío HIIT',
        category: 'HIIT',
        duration: '25 min',
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2940',
    },
];

export default function Workouts() {
    const [selectedCategory, setSelectedCategory] = React.useState('All');

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>EntrenamientosS</Text>
                <Text style={styles.subtitle}>Encuentra tu entrenamiento perfecto</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoriesContainer}
            >
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        style={[
                            styles.categoryButton,
                            selectedCategory === category.name && styles.categoryButtonActive,
                        ]}
                        onPress={() => setSelectedCategory(category.name)}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                selectedCategory === category.name && styles.categoryTextActive,
                            ]}
                        >
                            {category.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.workoutsGrid}>
                {workouts.map((workout) => (
                    <TouchableOpacity key={workout.id} style={styles.workoutCard}>
                        <Image source={{ uri: workout.image }} style={styles.workoutImage} />
                        <View style={styles.workoutOverlay}>
                            <View style={styles.workoutInfo}>
                                <Text style={styles.workoutTitle}>{workout.title}</Text>
                                <View style={styles.workoutDetails}>
                                    <Text style={styles.workoutCategory}>{workout.category}</Text>
                                    <Text style={styles.workoutDuration}>{workout.duration}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
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
    categoriesContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
    },
    categoryButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: '#f8f9fa',
    },
    categoryButtonActive: {
        backgroundColor: '#FF4757',
    },
    categoryText: {
        fontSize: 16,
        color: '#666',
        fontWeight: '500',
    },
    categoryTextActive: {
        color: '#fff',
    },
    workoutsGrid: {
        padding: 20,
    },
    workoutCard: {
        height: 200,
        borderRadius: 20,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    workoutImage: {
        width: '100%',
        height: '100%',
    },
    workoutOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'flex-end',
    },
    workoutInfo: {
        padding: 20,
    },
    workoutTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    workoutDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    workoutCategory: {
        fontSize: 16,
        color: '#fff',
        opacity: 0.9,
    },
    workoutDuration: {
        fontSize: 16,
        color: '#fff',
        opacity: 0.9,
    },
});