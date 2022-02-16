import React from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { Post } from './Post'

const Wrapper = styled.View`
  padding: 10px;
`

export const PostList = ({ data, onOpen }) => {
  return (
    <Wrapper>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
      />
    </Wrapper>
  )
}
