import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import MyHeader from '../components/MyHeader';
import {Avatar} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

export default class MedicineRequestScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              image:"../assets/crocin.jpg",
              text: "Paracetamol",
          },
          {
              image:"../assets/septic.jpg",
              text: "Antiseptic cream",
          },
          {
              image:"../assets/aid.jpg",
              text: "Band Aid",
          },
          {
              image:"../assets/diaper.jpg",
              text: "Diapers",
          },
          {
              image: "../assets/dolo.jpg",
              text: "Dolopar 500",
          },
        ],
        userID: firebase.auth().currentUser.email,
        image: "#",
        nameOfMedicine: ""
      }
    }

    renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'lightblue',
              borderRadius: 10,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            {/* <Image source={require(item.image)} 
                onPress={()=>{
                    this.setState({nameOfMedicine: item.text})
                }}
            /> */}
            <Text>{item.text}</Text>
          </View>

        )
    }

    selectPicture=async()=>{
        const {cancelled, uri} = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4,3],
          quality: 1
        }) 
        if(! cancelled){
          this.uploadImage(uri,this.state.userId);
        }
      }
    
      uploadImage=async(uri,imageName)=>{
        var response = await fetch(uri);
        var blob = await response.blob();
        var ref = firebase.storage().ref().child("userPrescriptions/" + imageName);
        return ref.put(blob).then((response)=>{
          this.fetchImage(imageName);
        })
      }
    
      fetchImage=(imageName)=>{
        var storageRef = firebase.storage().ref().child("userPrescriptions/" + imageName);
        //get the download url
        storageRef.getDownloadURL()
        .then((url)=>{
          this.setState({
            image: url
          })
        })
        .catch((error)=>{
          this.setState({
            image: "#"
          })
        })
      }

      componentDidMount(){
          this.fetchImage(this.state.userID);
      }

    render(){
        return(
            <View>
                <MyHeader text="MEDICINES" />
                
                <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
                    <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                        <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={this._renderItem}
                        onSnapToItem = { index => this.setState({activeIndex:index}) } />
                    </View>
                </SafeAreaView>

                <Text style={styles.head}>
                    If you are in need of any other medicines, 
                    kindly upload a prescription given by a proper doctor
                </Text>

                <Avatar rounded
                  source={{
                    uri: this.state.image
                  }}
                  size="large"
                  onPress={()=>{this.selectPicture()}}
                  containerStyle={styles.imageContainer}
                  showEditButton/>

                  <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>REQUEST</Text>
                  </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head: {
        fontWeight: "bold",
        fontSize: 25,
        color: "darkblue",
        textAlign: center,
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#0080ff",
        width: "60%",
        height: "5%",
        alignSelf: "center",
        marginTop: 20
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        marginTop: 6
    }
})