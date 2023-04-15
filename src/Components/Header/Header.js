import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Header = () => {
    return(
        <View style={styles.container}>
        <FontAwesome5 name="money-check-alt" size={40} color='#808000' style={{
            marginStart: 3
        }}/>
        <Text style={{
            fontWeight: 'bold',
            fontSize: 30,
        }}> My</Text>
        
        <Text style={{
            fontWeight: 'bold',
            fontSize: 30,
            color: '#808000'
        }}> Money</Text>

        </View>
    );
}

export default Header;