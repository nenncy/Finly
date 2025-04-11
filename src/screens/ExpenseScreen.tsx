import React, { useState } from "react";
import { View,
  Text,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView,
   StyleSheet, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useForm } from 'react-hook-form';
import { Picker } from "@react-native-picker/picker";

export type RootDrawerParamList = {
  Home: undefined;
  income: undefined;
};

const ExpenseScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [customcategory, setCustomCategory] = useState('');

  const [note, setNote] = useState('');

  const categoriesList = ['Salary', 'Freelance', 'Bonus', 'Gift', 'Other'];


  const changeMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    setSelectedDate(newDate);
  };

  const formattedMonth = selectedDate.toLocaleString('default', {
    month: 'long'
  });

  const incomeData = {
    amount: parseFloat(amount),
    category,
    note,
    customcategory,
    formattedMonth,
    date: new Date().toISOString(),
  };

  console.log('Income Added:', incomeData);
  const onSubmit = () => {

  }
 

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start',  marginVertical:28}}>
      <View style={styles.monthRow}>
        <TouchableOpacity onPress={() => changeMonth('prev')}>
          <Text style={styles.arrows}>{'‹'}</Text>
        </TouchableOpacity>

        <Text style={styles.monthText}>{formattedMonth}</Text>

        <TouchableOpacity onPress={() => changeMonth('next')}>
          <Text style={styles.arrows}>{'›'}</Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
      style={{ flex: 1 , flexDirection: 'row' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.containerform}>
        {/* Amount */}
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />

        {/* Category */}
        <Text style={styles.label}>Category</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label="Select Category" value="" />
            {categoriesList.map((cat, index) => (
              <Picker.Item key={index} label={cat} value={cat} />
            ))}
          </Picker>
        </View>

        {
          incomeData.category == "Other" ?  <TextInput
          style={styles.input}
          placeholder="Enter New Category"
          value={customcategory}
          onChangeText={setCustomCategory}
          multiline
        /> : <></>
        }

        {/* Note */}
        <Text style={styles.label}>Note</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Optional note"
          value={note}
          onChangeText={setNote}
          multiline
        />

        {/* Add Income Button */}
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Add Income</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
    </View>
  );
}

export default ExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 12,
  },
  containerform: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#f5f7fa',
    flexGrow: 1,
    // 👇 DO NOT add `flexDirection: 'row'` here!
  },
  arrow: {
    fontSize: 28,
    color: '#4e73df',
    paddingHorizontal: 12,
  },
  month: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  monthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent:'flex-start',
    marginBottom: 24,
    paddingHorizontal: 12,
  },
  arrows: {
    fontSize: 28,
    color: '#4e73df',
    paddingHorizontal: 12,
  },
  monthText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4e73df',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  
});