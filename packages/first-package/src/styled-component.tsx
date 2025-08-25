import { StyleSheet, Text, TextProps } from "react-native";

interface StyledTextProps extends TextProps {
  color?: string;
  fontSize?: number;
}

export function StyledText({
  color = "black",
  fontSize = 16,
  style,
  ...props
}: StyledTextProps) {
  return <Text style={[styles.text, { color, fontSize }, style]} {...props} />;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "System",
  },
});
