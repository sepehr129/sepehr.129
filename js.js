
        // دریافت رشته از کاربر
        let inputString = prompt("لطفاً یک رشته وارد کنید:");

        // دریافت کاراکتر از کاربر
        let inputChar = prompt("لطفاً یک کاراکتر وارد کنید:");
        
        // یافتن ایندکس از ابتدا و انتها
        let indexFromStart = inputString.indexOf(inputChar);
        let indexFromEnd = inputString.lastIndexOf(inputChar);
        
        // نمایش پیغام با شماره ایندکس‌ها
        alert(`شماره ایندکس کاراکتر '${inputChar}' از ابتدا: ${indexFromStart}\nشماره ایندکس کاراکتر '${inputChar}' از انتها: ${indexFromEnd}`);
const router = createBrowserRouter([
  {

