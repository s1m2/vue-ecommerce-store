import { createPaymentIntent } from '@/lib/api';

export function useStripe() {
  const route = useRoute();
  const router = useRouter();

  const token = ref(null);
  const status = ref<string| null>(null);
  const stripe = ref(
    new Stripe(
      'pk_test_51Hw6gsLsmY8VNNHcZF2z8MsIN9IsKYLCZlobPsaPgGKyp92tOp9J0KLkHnKX4HXWuUkzDNCV9Zpj6TiyojPolxST00gbaYsjtW'
    )
  )
  const elements = ref(null)

  async function initializePaymentElement() {
    status.value = 'loading'
    try {
      const response = await createPaymentIntent(1099);
      const { clientSecret } = await response.json();
      token.value = clientSecret;
      const options = { clientSecret };
  
      elements.value = stripe.value.elements(options);
      const paymentElement = elements.value.create('payment');
      paymentElement.mount('#payment-info');
      status.value = 'success';
    } catch (error) {
      status.value = 'error'; 
      console.log(error);
    }
  }

  async function handlePayment() {
    const { error } = await stripe.value.confirmPayment({
      elements: elements.value,
      confirmParams: {
        return_url: 'http://localhost:5173/success'
      }
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      alert(error.message)
    } else {
      alert('There was an expected error. Please see console for more details.')
    }
  }

  async function checkPaymentStatus(): Promise<string> {
    const clientSecret = route.query.payment_intent_client_secret as string
    if (!clientSecret) router.push({ name: 'checkout' })
    const { paymentIntent } = await stripe.value.retrievePaymentIntent(clientSecret)
    return paymentIntent.status
  }

  return { status, initializePaymentElement, handlePayment, checkPaymentStatus }
}
