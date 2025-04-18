import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

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
    { id: '5', title: 'Netflix Subscription', amount: 12.99, type: 'expense', categoryId: 'entertainment', date: '2025-03-28' },
    { id: '6', title: 'Freelance Payment', amount: 300, type: 'income', categoryId: 'freelance', date: '2025-03-27' },
    { id: '7', title: 'Gas Station', amount: 40, type: 'expense', categoryId: 'transport', date: '2025-03-26' },
    { id: '8', title: 'Restaurant Dinner', amount: 65.2, type: 'expense', categoryId: 'food', date: '2025-03-25' },
    { id: '9', title: 'Electricity Bill', amount: 110.5, type: 'expense', categoryId: 'utilities', date: '2025-03-24' },
    { id: '10', title: 'Monthly Bonus', amount: 200, type: 'income', categoryId: 'bonus', date: '2025-03-23' },
];

const AllTransactionsScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>All Transactions</Text>
            <ScrollView style={{ padding: 20 }}>
                {/* <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
                    All Transactions
                </Text> */}
                {transactions.map((tx) => (
                    <View key={tx.id} style={{ padding: 12, backgroundColor: '#fff', marginBottom: 10, borderRadius: 8 }}>
                        <Text style={{ fontWeight: 'bold' }}>{tx.title}</Text>
                        <Text>${tx.amount} • {tx.categoryId}</Text>
                        <Text>{tx.date}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#333',
    },
    transactionCard: {
      backgroundColor: '#ffffff',
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
      elevation: 2, // subtle shadow on Android
      shadowColor: '#000', // subtle shadow on iOS
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 6,
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      color: '#222',
    },
    income: {
      fontSize: 16,
      color: 'green',
      fontWeight: '600',
    },
    expense: {
      fontSize: 16,
      color: 'red',
      fontWeight: '600',
    },
    details: {
      fontSize: 13,
      color: '#666',
    },
  });
  

export default AllTransactionsScreen;