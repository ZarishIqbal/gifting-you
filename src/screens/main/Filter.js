import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import FilterButton from '../../components/FilterButton';
import colors from '../../config/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Filter(props) {
  const [popularity, setPopulairty] = useState(true);
  const [timeline, setTimeline] = useState(true);
  const [country, setCountry] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <AppText style={styles.title} en="Popularity" pt="pt popularity" />
      <View style={styles.filter}>
        <FilterButton
          onPress={() => setPopulairty(false)}
          enTitle="Most Popular"
          ptTitle=""
          outlined
          disabled={!popularity}
        />
        <FilterButton
          onPress={() => setPopulairty(true)}
          enTitle="Least Popular"
          ptTitle=""
          outlined
          disabled={popularity}
        />
      </View>

      <AppText style={styles.title} en="Timeline" pt="pt Timeline" />
      <View style={styles.filter}>
        <FilterButton
          onPress={() => setTimeline(false)}
          enTitle="Newest"
          ptTitle=""
          outlined
          disabled={!timeline}
        />
        <FilterButton
          onPress={() => setTimeline(true)}
          enTitle="Oldest"
          ptTitle=""
          outlined
          disabled={timeline}
        />
      </View>

      <AppText style={styles.title} en="Country" pt="pt Country" />
      <View style={styles.filter}>
        <FilterButton
          onPress={() => setCountry(false)}
          enTitle="Ascending (A-Z)"
          ptTitle=""
          outlined
          disabled={!country}
        />
        <FilterButton
          onPress={() => setCountry(true)}
          enTitle="Descending (Z-A)"
          ptTitle=""
          outlined
          disabled={country}
        />
      </View>

      <AppButton
        onPress={() => console.log('Pressed')}
        enTitle="Search"
        ptTitle="Pt Search"
        style={styles.button}
        children={
          <MaterialIcons
            name="arrow-back"
            onPress={() => {}}
            size={24}
            color={colors.white}
          />
        }
      />
    </View>
  );
}

export default Filter;
const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 15,
    marginLeft: 10,
    marginTop: 25,
  },
  button: {
    marginTop: '30%',
  },
});
