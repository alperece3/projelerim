import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  
    CarContainer:{
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles : {
    marginTop: 76,
    textAlign: 'center',
    alignItems: "center",
  },
  titlehead:{
    
    fontWeight: 'bold',
    fontSize: 36,
    color: '#333333',
  },
  subtitle: {

color: '#5E5E5E',
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: "absolute",
  },
  buttonsContainer:{
    
    position: "absolute",
    bottom: 50,
    width: '100%',

  },
});

export default styles;