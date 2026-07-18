import { useActionState } from "react";
import { useAuth } from "../../context/auth/useAuth";

import Input from "../../components/Input";

const Form = () => {
  const { login } = useAuth();
  const [state, formAction, isPending] = useActionState(handleAction, {
    succes: false,
    error: null,
  });

  async function handleAction(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");
    const phone = formData.get("number");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    let errors = {};

    if (!username || username.trim() === "") {
      errors.username = "ادخل اسم مستخدم من فضلك";
    }
    if (!password || password.trim() === "") {
      errors.password = "ادخل كلمة مرور من فضلك";
    }
    if (!email || email.trim() === "") {
      errors.email = "ادخل بريدك الالكتروني من فضلك";
    }
    if (!phone || phone.trim() === "") {
      errors.phone = "ادخل رقم هاتفك من فضلك";
    }

    if (Object.keys(errors).length > 0) {
      return { succes: false, error: errors };
    }

    login();
  }

  return (
    <div className="flex min-h-[calc(100vh-100px)] w-full items-center justify-center">
      <form
        action={formAction}
        className="t flex flex-col items-center gap-3 rounded-lg bg-white p-5"
      >
        <div>
          <Input
            name="username"
            type="text"
            id="username"
            label="اسم المستخدم"
            className="rounded-lg bg-[#dddddd5c]"
            placeholder="أدخل اسم المستخدم"
          />

          {state?.error?.username && (
            <span className="text-xs font-semibold text-red-500">
              {state.error.username}
            </span>
          )}
        </div>

        <div>
          <Input
            name="password"
            type="password"
            id="password"
            label="كلمة المرور"
            className="rounded-lg bg-[#dddddd5c]"
            placeholder="أدخل كلمة المرور"
          />

          {state?.error?.password && (
            <span className="text-xs font-semibold text-red-500">
              {state.error.password}
            </span>
          )}
        </div>

        <div>
          <Input
            name="email"
            type="email"
            id="email"
            label="البريد الالكتروني"
            className="rounded-lg bg-[#dddddd5c]"
            placeholder="أدخل بريدك الالكتروني"
          />

          {state?.error?.email && (
            <span className="text-xs font-semibold text-red-500">
              {state.error.email}
            </span>
          )}
        </div>

        <div>
          <Input
            name="number"
            type="text"
            id="number"
            label="رقم الهاتف"
            className="rounded-lg bg-[#dddddd5c]"
            placeholder="أدخل رقم هاتفك "
          />

          {state?.error?.phone && (
            <span className="text-xs font-semibold text-red-500">
              {state.error.phone}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="mt-5 w-full rounded-lg bg-[#78350F] p-2 text-white shadow-gray-700 duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          {isPending ? "جاري تسجيل الدخول" : "تسجيل الدخول"}
        </button>
      </form>
    </div>
  );
};

export default Form;
