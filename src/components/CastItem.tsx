import { Cast } from '../interfaces/CredictsInterface';
import { Image, Text, View, StyleSheet } from 'react-native';


interface Props{
    actor: Cast,
}

export const CastItem = ({actor}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;

    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image 
                        source={{uri}}
                        style={{ width:60, height: 60, borderRadius:8 }}
                    />
                )    
            }
            
            <View style={styles.actorInfo}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{ actor.name }</Text>
                <Text style={{fontSize: 16 }}>{ actor.character }</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 60,
        borderRadius: 8,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.24,
        shadowRadius: 8,
        elevation: 6,
        marginHorizontal:18,
        paddingRight: 15,

    },
    actorInfo:{
        marginLeft: 10,
        marginTop: 4,

    }
});
