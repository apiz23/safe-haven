import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
	return (
		<SafeAreaView className="min-h-screen px-4 py-6">
			<Text className="text-white text-2xl">Hafiz</Text>
		</SafeAreaView>
	);
}
