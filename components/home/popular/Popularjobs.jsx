import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'

import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>show all</Text>
      </TouchableOpacity>
      </View>

      <view style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4]}
          renderItem={() => (
            <PopularJobCard 
            item={item}
            />
          )}
          />

        )}
      </view>
    </View>
  )
}

export default Popularjobs