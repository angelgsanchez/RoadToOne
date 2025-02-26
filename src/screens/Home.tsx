import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const workouts = [
  {
    id: 1,
    title: 'IIT de cuerpo completo',
    duration: '45 min',
    calories: '400',
    level: 'Intermedio',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2940',
  },
  {
    id: 2,
    title: 'Fuerza central',
    duration: '30 min',
    calories: '250',
    level: 'Principiante',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2940',
  },
  {
    id: 3,
    title: 'Yoga de poder',
    duration: '60 min',
    calories: '300',
    level: 'Avanzado',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2940',
  },
];

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Bienvenido de Vuelta, Alex!</Text>
        <Text style={styles.date}>Lune, 12 Julio</Text>
      </View>

      <View style={styles.statsContainer}>
        <LinearGradient
          colors={['#FF4757', '#FF7B69']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.statsCard}
        >
          <View>
            <Text style={styles.statsTitle}>Retos Hoy</Text>
            <Text style={styles.statsValue}>45 min</Text>
            <Text style={styles.statsSubtext}>15/30 racha de dias </Text>
          </View>
        </LinearGradient>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Entrenamientos destacados</Text>
        {workouts.map((workout) => (
          <TouchableOpacity key={workout.id} style={styles.workoutCard}>
            <Image source={{ uri: workout.image }} style={styles.workoutImage} />
            <View style={styles.workoutInfo}>
              <View>
                <Text style={styles.workoutTitle}>{workout.title}</Text>
                <Text style={styles.workoutLevel}>{workout.level}</Text>
              </View>
              <View style={styles.workoutStats}>
                <Text style={styles.workoutDuration}>{workout.duration}</Text>
                <Text style={styles.workoutCalories}>{workout.calories} cal</Text>
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
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  statsContainer: {
    padding: 20,
  },
  statsCard: {
    padding: 20,
    borderRadius: 20,
    height: 140,
    justifyContent: 'center',
  },
  statsTitle: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.9,
  },
  statsValue: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  statsSubtext: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1a1a1a',
  },
  workoutCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 15,
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
    height: 200,
  },
  workoutInfo: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  workoutLevel: {
    fontSize: 14,
    color: '#666',
  },
  workoutStats: {
    alignItems: 'flex-end',
  },
  workoutDuration: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF4757',
    marginBottom: 4,
  },
  workoutCalories: {
    fontSize: 14,
    color: '#666',
  },
});


// import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

// const HomeScreen = () => {
//   // Datos de ejemplo (luego reemplazar con datos reales)
//   const followedUsers = [
//     {
//       id: 1,
//       name: "María López",
//       lastWorkout: "🏃 5km en 30min",
//       avatar: "https://example.com/avatar1.jpg",
//     },
//     {
//       id: 2,
//       name: "Carlos Pérez",
//       lastWorkout: "🏋️ 100kg en press banca",
//       avatar: "https://example.com/avatar2.jpg",
//     },

//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Personas Seguidas</Text>

//       <FlatList
//         data={followedUsers}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Image
//               source={{ uri: item.avatar }}
//               style={styles.avatar}
//             />
//             <View style={styles.cardContent}>
//               <Text style={styles.name}>{item.name}</Text>
//               <Text style={styles.workout}>{item.lastWorkout}</Text>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 12,
//     marginBottom: 8,
//     borderRadius: 8,
//     elevation: 2, // Sombra en Android
//     shadowColor: '#000', // Sombra en iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   cardContent: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   workout: {
//     color: '#666',
//   },
// });

// export default HomeScreen;