// ========== Snippet 1 ==========
// دالة لحساب الإجمالي مع أنواع صحيحة للمعاملات
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

console.log("Total 1:", calculateTotal(10, 5)); // ✅ Output: 50
// ❌ أخطاء ممنوعة في TypeScript:
// calculateTotal("10", 5);
// calculateTotal(true, "3");

// ========== Snippet 2 ==========
type User = {
  name: string;
  age: number;
  email?: string; // خاصية اختيارية
};

let user: User = {
  name: "Alice",
  age: 30,
};

// إضافة بريد إلكتروني بطريقة صحيحة
user.email = "alice@example.com";
// ❌ هذا السطر سيعطي خطأ في TypeScript لو تم تفعيله:
// user.age = "thirty"; // Error: Type 'string' is not assignable to type 'number'

// ========== Snippet 3 ==========
type UserInfo = {
  name: string;
  age: number;
  isActive: boolean;
};

function displayUserInfo(user: UserInfo): boolean {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
  return user.isActive;
}

// ✅ صحيح:
const isBobActive = displayUserInfo({ name: "Bob", age: 25, isActive: true });
console.log("Is Bob active?", isBobActive);

// ❌ سيعطي خطأ إذا مررنا كائن ناقص:
// displayUserInfo({ name: "Bob" }); // Error: Property 'age' and 'isActive' are missing

