import { StripeProvider, useStripe } from "@stripe/stripe-react-native";
import { useEffect, useState } from "react";
import { Alert, Button, StatusBar, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Buy() {
  return (
    <>
      <StatusBar style="light" animated={true} hidden={true} />
      <StripeProvider
        publishableKey="pk_test_51Ob3OODYnDpmKN8R8iAetLdazqre5NAGycmNADOTVCFROkUY7oqGQ1gdLrP5h4lEMfytOsnxq2uQXnubpJdmFKQA005diGufQc"
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
      >
        <CheckoutScreen />
      </StripeProvider>
    </>
  );
}
export function CheckoutScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const navig = useNavigation();
  // const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

 
  const fetchPaymentSheetParams = async () => {
    const response = await fetch(
      "http://192.168.43.96:5000/createPaymentIntent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };
  useEffect(() => {
    fetchPaymentSheetParams();
    initializePaymentSheet();
    openPaymentSheet();
  }, []);
  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      // publishableKey,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      // allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Jane Doe",
      },
    });
    if (!error) {
      setLoading(true); 
    } else {
      console.log("error when setting payment details");
    }
    // openPaymentSheet();
  };

  const openPaymentSheet = async () => {
    // const navig = useNavigation();
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
      // navig.navig
    }
  };

  return (
    <View className="flex-1 justify-center bg-black items-center">
      {/* <Button
          variant="primary"
          disabled={!loading}
          title="Checkout"
          onPress={openPaymentSheet}
        /> */}
    </View>
  );
}
