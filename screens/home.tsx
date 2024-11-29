import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

const HomeScreen = () => {
  const quickActions = [
    { id: "1", title: "Send Money" },
    { id: "2", title: "Request Money" },
    { id: "3", title: "Pay Bills" },
    { id: "4", title: "Invest" },
  ];

  const recentTransactions = [
    { id: "1", title: "Netflix Subscription", amount: "-$15.99" },
    { id: "2", title: "Salary Credit", amount: "+$1,500.00" },
    { id: "3", title: "Coffee Shop", amount: "-$4.50" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, John</Text>
        <Text style={styles.dateText}>Today, Nov 25, 2024</Text>
      </View>

      {/* Balance */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Your Balance</Text>
        <Text style={styles.balanceValue}>$10,250.75</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsContainer}>
          {quickActions.map((action) => (
            <TouchableOpacity key={action.id} style={styles.actionButton}>
              <Text style={styles.actionText}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Recent Transactions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <FlatList
          data={recentTransactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text style={styles.transactionTitle}>{item.title}</Text>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  dateText: {
    fontSize: 14,
    color: "#666",
  },
  balanceContainer: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  balanceLabel: {
    fontSize: 16,
    color: "#FFF",
  },
  balanceValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  actionButton: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    width: "48%",
    alignItems: "center",
  },
  actionText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  transactionTitle: {
    fontSize: 16,
    color: "#333",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default HomeScreen;
