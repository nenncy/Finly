import React from "react";
import {  View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    ScrollView,
    Button
} from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

// types.ts
export type RootDrawerParamList = {
    Home: undefined;
    Settings: undefined;
  };

  interface TransactionSummary {
    totalTransactions: number;
    income: number;
    expense: number;
  }
  


  interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: 'income' | 'expense'; 
    categoryId: string;          
    date: string;
  }

  const transactions: Transaction[] = [
    { id: '1', title: 'Starbucks', amount: 5.4, type: 'expense', categoryId: 'food', date: '2025-04-01' },
    { id: '2', title: 'Paycheck', amount: 900, type: 'income', categoryId: 'salary', date: '2025-03-31' },
    { id: '3', title: 'Uber Ride', amount: 14, type: 'expense', categoryId: 'transport', date: '2025-03-30' },
    { id: '4', title: 'Groceries', amount: 54.75, type: 'expense', categoryId: 'grocery', date: '2025-03-29' },
  ];

  const summary = {
    totalTransactions: transactions.length,
    income: transactions
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0),
    expense: transactions
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0),
  };
  
  



const HomeScreen: React.FC= () => (
 <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
    <View style={styles.container}>
    <Text style={styles.header}>Home</Text>

    <View style={styles.card}>
      <Text style={styles.label}>Total Transactions:</Text>
      <Text style={styles.value}>{summary.totalTransactions}</Text>
    </View>

    <View style={styles.cardRow}>
      <View style={styles.cardHalf}>
        <Text style={styles.label}>Income</Text>
        <Text style={[styles.value, styles.income]}>${summary.income}</Text>
      </View>

      <View style={styles.cardHalf}>
        <Text style={styles.label}>Expense</Text>
        <Text style={[styles.value, styles.expense]}>${summary.expense}</Text>
      </View>
    </View>
    <Text style={styles.sectionTitle}>Recent Transactions</Text>
    <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <View>
                <Text style={styles.transactionTitle}>{item.title}</Text>
                <Text style={styles.categoryLabel}>Category: {item.categoryId}</Text>
              </View>
              <Text style={item.type === 'expense' ? styles.expense : styles.income}>
                {item.type === 'expense' ? '-' : '+'}${item.amount.toFixed(2)}
              </Text>
            </View>
          )}
        />
  </View>
      </ScrollView>
      </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      marginVertical: 20,
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 12,
      marginBottom: 20,
      elevation: 2,
    },
    cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    cardHalf: {
      flex: 0.48,
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 12,
      elevation: 2,
    },
    label: {
      fontSize: 16,
      color: '#666',
      marginBottom: 4,
    },
    value: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    income: {
      color: 'green',
    },
    expense: {
      color: 'red',
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    transactionItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 8,
      marginBottom: 10,
      elevation: 1,
    },
    transactionTitle: {
      fontSize: 16,
      fontWeight: '500',
    },
    categoryLabel: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
      }
      
  });

export default HomeScreen;


