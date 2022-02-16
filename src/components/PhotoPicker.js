import React, { useState } from 'react'
import { Button, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  margin-bottom: 10px;
`

const UploadedImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 10px;
`

async function askForPermissions() {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA
  )
  if (status !== 'granted') {
    Alert.alert('Ошибка', 'Вы не дали прав на создание фото')
    return false
  }
  return true
}

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null)

  const takePhoto = async () => {
    const hasPermissions = await askForPermissions()

    if (!hasPermissions) {
      return
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9]
    })

    setImage(img.uri)
    onPick(img.uri)
  }

  return (
    <Wrapper>
      <Button title='Сделать фото' onPress={takePhoto} />
      {image && <UploadedImage style={styles.image} source={{ uri: image }} />}
    </Wrapper>
  )
}
