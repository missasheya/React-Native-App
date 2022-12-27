import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />
                <Text>1 Nucamp Way</Text>
                <Text>Seattle, WA 98001</Text>
                <Text style={{ marginBottom: 10 }}>U.S.A</Text>

            </Card>
        </ScrollView>
    )
};

export default ContactScreen;