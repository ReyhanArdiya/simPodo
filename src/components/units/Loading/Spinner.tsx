import { Spinner as Sp } from "react-loading-io";
import { useSelector } from "react-redux";
import { themeSliceSelectors } from "../../../store/theme/slice";
import theme from "../../../styles/theme";

const Spinner = () => {
	const dark = useSelector(themeSliceSelectors.selectIsDark);

	return <Sp
		color={
			dark ?
				theme.colors.dark.UI[2] :
				theme.colors.light.UI[1]
		}
		size={200}
	/>;
};

export default Spinner;
