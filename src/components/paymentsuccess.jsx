export default function PaymentSuccess() {
  return (
    <div className="higth-full flex flex-col items-left justify-center">
      <h1 className="text-3xl font-bold text-green-800 mb-4">🎉 Payment Successful!</h1>
      <h4 className="text-md text-green-700 max-w-md">
        Please be patient while we process your payment. This may take up to <strong>24 hours</strong>.
      </h4>
    </div>
  );
}
