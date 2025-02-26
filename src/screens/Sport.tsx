import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SportScreen = () => {
  const sports = [
    { id: 1, name: "Atletismo", icon: "🏃" },
    { id: 2, name: "Natación", icon: "🏊" },
    { id: 3, name: "Ciclismo", icon: "🚴" },
    { id: 4, name: "Gimnasia", icon: "🤸" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deportes Olímpicos</Text>
      
      <FlatList
        data={sports}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Diseño en 2 columnas
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.sportCard}>
            <Text style={styles.sportIcon}>{item.icon}</Text>
            <Text style={styles.sportName}>{item.name}</Text>
          </TouchableOpacity>
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
  sportCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    margin: 8,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  sportIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  sportName: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SportScreen;