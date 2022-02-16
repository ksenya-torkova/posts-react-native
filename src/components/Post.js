import React from 'react'
import styled from 'styled-components/native'
import {
  TouchableOpacity
} from 'react-native'

const PostContainer = styled.View`
  margin-bottom: 15px;
  overflow: hidden;
`

const PostImage = styled.ImageBackground`
  width: 100%;
  height: 200px;
`

const TextWrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.5),
  padding-top: 5px,
  padding-bottom: 5px;
  align-items: center;
  width: 100%;
`

const Title = styled.Text`
  color: #fff;
  font-family: 'open-regular';
`

export const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <PostContainer>
        <PostImage source={{ uri: post.img }}>
          <TextWrapper>
            <Title>
              {new Date(post.date).toLocaleDateString()}
            </Title>
          </TextWrapper>
        </PostImage>
      </PostContainer>
    </TouchableOpacity>
  )
}
