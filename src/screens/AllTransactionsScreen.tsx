import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';

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
  const [searchQuery, setSearchQuery] = useState('');
  const filteredTransactions = transactions.filter((tx) => 
   searchQuery === '' ? true : tx.title.toLowerCase().includes(searchQuery.toLowerCase()) || tx.categoryId.toLowerCase().includes(searchQuery.toLowerCase()) || tx.date.toLowerCase().includes(searchQuery.toLowerCase()) || tx.type.toLowerCase().includes(searchQuery.toLowerCase()) 
);
  const transaction = filteredTransactions.length > 0 ? filteredTransactions : transactions;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>All Transactions</Text> */}
      <TextInput
              style={styles.searchBar}
              placeholder="Search transactions..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
      <ScrollView style={{ padding: 20 }}>
        {transaction.map((tx) => (

          <View style={styles.transactionCard}>
            <View style={styles.row}>
         
              <Text style={styles.title}>{tx.title}</Text>
              <Text style={tx.type === 'expense' ? styles.expense : styles.income}>
                {tx.type === 'expense' ? '-' : '+'}${tx.amount.toFixed(2)}
              </Text>
            </View>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>{tx.categoryId}</Text>
            </View>

            <Text style={styles.details}>Date: {tx.date}</Text>
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
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 6,
  },
  badgeText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
    textTransform: 'capitalize',
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
    paddingBottom: 5,
    textAlign: 'center'
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
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  
});


export default AllTransactionsScreen;