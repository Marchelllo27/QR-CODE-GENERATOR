import { LoginForm } from "@/components/auth/login-form";
export default function LoginPage() {
  return (
    <div className="bg-muted flex-1 flex flex-col items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  );
}
