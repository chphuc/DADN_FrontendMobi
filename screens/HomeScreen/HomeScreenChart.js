import { View, Text } from 'react-native'
import {
    LineChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

const HomeScreenChart = ({ data }) => {
    const screenWidth = Dimensions.get("window").width;
    const chartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#ffffff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(19, 19, 20, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional,
    };
    return (
        <View>
            {
                data ?
                    <LineChart
                        data={data}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        getDotColor={() => "#000000"}
                    />
                    :
                    <Text style={{ textAlign: 'center' }}>Click to view chart</Text>
            }
        </View>
    )
}

export default HomeScreenChart