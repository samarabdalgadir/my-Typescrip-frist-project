"use strict";
// ========== Snippet 1 ==========
// دالة لحساب الإجمالي مع أنواع صحيحة للمعاملات
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log("Total 1:", calculateTotal(10, 5)); // ✅ Output: 50
let user = {
    name: "Alice",
    age: 30,
};
// إضافة بريد إلكتروني بطريقة صحيحة
user.email = "alice@example.com";
function displayUserInfo(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
    return user.isActive;
}
// ✅ صحيح:
const isBobActive = displayUserInfo({ name: "Bob", age: 25, isActive: true });
console.log("Is Bob active?", isBobActive);
// ❌ سيعطي خطأ إذا مررنا كائن ناقص:
// displayUserInfo({ name: "Bob" }); // Error: Property 'age' and 'isActive' are missing
