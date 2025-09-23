import { LoginForm } from "@/components/auth/login-form";
export default function LoginPage() {
  return (
    <div className="bg-muted flex-1 flex flex-col items-center justify-center">
      <div className="max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
