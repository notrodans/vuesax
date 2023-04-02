import withAuth from "next-auth/middleware";

export default withAuth({
	callbacks: {
		authorized: ({ token }) => {
			if (token) {
				return token?.role === "ADMIN";
			}
			return false;
		}
	}
});

export const config = { matcher: ["/admin"] };
