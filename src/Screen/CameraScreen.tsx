import { Image, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constant/Color'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Header from '../components/Header'
import { launchCamera } from 'react-native-image-picker'
interface imageProps {
    fileName: string,
    fileSize: number,
    height: number,
    originalPath: string,
    type: string,
    uri: string,
    width: number

}
const CameraScreen = () => {
    const [profilePic, setProfilePic] = useState<imageProps>();
    console.log("🚀 ~ CameraScreen ~ profilePic:", profilePic)

    const openCamera = async () => {
        if (Platform.OS == 'android') {
            await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
        }
        try {
            await launchCamera({
                mediaType: 'photo',
                cameraType: 'front',
            }, (response: any) => {
                console.log(response);
                if (response.didCancel) {
                } else if (response.error) {
                    console.log('error msg ===>>> ', response.error);
                } else {
                    let resourcePath = response?.assets?.[0];
                    setProfilePic(resourcePath);
                }
            });
        } catch (error) {
            console.log('error found ===> ', error);
        }
    };
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.profileImageContainer}>
                {profilePic?.uri && (
                    <Image source={{ uri: profilePic.uri }} style={styles.profileImage} resizeMode='contain' />
                )}
            </View>
            <TouchableOpacity onPress={openCamera} style={[styles.captureButtonContainer, !profilePic?.uri ? { marginTop: '70%' } : null]}>
                <View style={styles.captureButton}>
                    <Icon name="camera" size={30} color="white" />
                </View>
                <Text style={styles.captureText}>Capture</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CameraScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    profileImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        borderStyle: 'solid',
        backgroundColor: 'white'
    },
    captureButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    captureButton: {
        width: 65,
        height: 65,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: -30
    },
    captureText: {
        color: 'white',
    },
    profileImage: {
        width: '90%',
        height: '80%',
        borderWidth: 2,
    },
})