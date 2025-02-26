import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  // Datos de ejemplo (luego reemplazar con datos reales)
  const followedUsers = [
    {
      id: 1,
      name: "María López",
      lastWorkout: "🏃 5km en 30min",
      avatar: "https://example.com/avatar1.jpg",
    },
    {
      id: 2,
      name: "Carlos Pérez",
      lastWorkout: "🏋️ 100kg en press banca",
      avatar: "https://example.com/avatar2.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personas Seguidas</Text>
      
      <FlatList
        data={followedUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.avatar }}
              style={styles.avatar}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.workout}>{item.lastWorkout}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  workout: {
    color: '#666',
  },
});

export default HomeScreen;