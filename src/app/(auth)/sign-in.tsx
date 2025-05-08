import {Ionicons} from '@expo/vector-icons';
import {useRouter} from 'expo-router';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {z, ZodError} from 'zod';

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({email: '', password: ''});
  const loginSchema = z.object({
    email: z.string().min(1, {message: 'email required'}).email({message: 'invalid email'}).trim().toLowerCase(),

    password: z
      .string()
      .min(8, {message: 'password must be at least 8 characters'})
      .regex(/[A-Z]/, {message: 'password must contain at least 1 uppercase letter'})
      .regex(/[a-z]/, {message: 'password must contain at least 1 lowercase letter'})
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: 'password must contain at least 1 special character',
      }),
  });

  const handleSignIn = () => {
    try {
      loginSchema?.parse({email, password});
      // if (email && password) {
      //   router.replace("/(protected)/(tabs)");
      // }
    } catch (error) {
      console.log('🚀 ~ handleSignIn ~ error:', error);
      if (error instanceof ZodError) {
        console.log('🚀 ~ handleSignIn ~ error:', error?.issues);
        const newErrors: Record<string, string> = {};
        error.issues.forEach(issue => {
          const path = issue.path[0] as string;
          console.log('🚀 ~ error.issues.forEach ~ path:', path, newErrors[path]);
          console.log('🚀 ~ error.issues.forEach ~ issue:', !newErrors[path]);
          if (!newErrors[path]) {
            newErrors[path] = issue.message;
          }
        });
        console.log('🚀 ~ newErrors ~ newErrors:', newErrors);
        setErrors(newErrors as {email: string; password: string});
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
      <View style={styles.inputWrapper}>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize='none'
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color='gray' />
          </TouchableOpacity>
        </View>
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  passwordInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 15,
  },
  inputError: {
    borderColor: '#ff0000',
  },
  errorText: {
    color: '#ff0000',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
});
