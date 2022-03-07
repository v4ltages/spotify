import { AppContext } from "../pages/_app";
import { useContext } from "react";

export const useAppContext = () => {
	const context = useContext(AppContext);

	if (context === null) throw new Error("No provider found for AppContext");

	return context;
};