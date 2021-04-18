import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleProcessPayment';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ie1xMExFcjpB4r759VCSoIrMzimwOuDDkNEWNIgQuA5YCEJEnlMopp6I9Ceeafu27X9Pcfsip4RoZEQ4OOq1TAN00zOYDTPmP');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm />
        </Elements>
    );
};

export default ProcessPayment;