export function FormError({
  ariaId,
  messages,
}: {
  ariaId: string;
  messages: string[];
}) {
  return (
    <div id={ariaId} aria-live="polite" aria-atomic="true">
      {messages &&
        messages.map((message: string) => (
          <p className="mt-2 text-sm text-red-500" key={message}>
            {message}
          </p>
        ))}
    </div>
  );
}
