## s-form-handler
A single Form component handler  

## Task
#1. Упростить работу с большим количеством форм и написать компонент/библиотеку который возмет на себя функции хранения состояния полей, их валидацию и отправку формы.

**Требования:**
Не испльзовать внешние библиотеки для управления state.
Возможность настройки условий валидации полей
Возможность использования полей формы с разной html разметкой

#2. Заверстать и настроить работу форм регистрации и авторизации:

**Требования:**
Валидация полей должна происходить после первого нажатия на кнопку submit и далее при каждом изменении значения полей
Валидировать поле «элелктронная почта» по двум условиям:
поле не может быть пустым с текстом ошибки «Введите адрес электронной почты»
проверка формата введенных данных. Текст ошибки «Неверный формат электронной почты»
Валидировать поле «Пароль»:
поле не может быть пустым с текстом ошибки «Введите пароль»
В форме регистрации все поля обязательные
При сабмите формы показать лоадер на кнопке submit
Результат выложить в репозитории на github.com или bitbucket.org

## Get started

**git**
```bash
	git clone https://github.com/Dnddtw/s-form-handler.git
```

**npm**
```bash
	npm install
	npm start
```

## Published

https://dnddtw.github.io/s-form-handler/
