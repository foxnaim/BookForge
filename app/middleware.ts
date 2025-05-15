export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/builder", "/preview"], // защищённые маршруты
};
