// Stats.tsx
import { LineChart } from 'react-native-chart-kit';
import { View, Text, Dimensions } from 'react-native';

const StatsScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    datasets: [
      {
        data: [45, 30, 60, 25, 45, 90, 20],
        color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`, // Azul
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
        Estadísticas Semanales
      </Text>
      
      <LineChart
        data={data}
        width={screenWidth - 32}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: "#3498db",
          },
        }}
        bezier
      />
    </View>
  );
};

export default StatsScreen;