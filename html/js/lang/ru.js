(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.vuei18nLocales = factory());
}(this, (function () { 'use strict';
    return {
    "ru": {
        "pagination": {
            "previous": "&laquo; Предидущая",
            "next": "Следующая &raquo;"
        },
        "auth": {
            "failed": "Таких учетных данных нет",
            "throttle": "Слишком большое количество попыток. Попробуйте через {seconds} секунд."
        },
        "validation": {
            "accepted": "Вы подтвердить {attribute}.",
            "active_url": "Данная {attribute} ссылка не является валидным URL.",
            "after": "{attribute} должна быть дата больше чем {date}.",
            "after_or_equal": "{attribute} должна быть дата больше или равная чем {date}.",
            "alpha": "{attribute} может содержать только буквы.",
            "alpha_dash": "{attribute} может содержать только буквы, числа тире и подчекивания.",
            "alpha_num": "{attribute} ожет содержать только буквыи числа.",
            "array": "{attribute} должен быть массивом.",
            "before": "{attribute} должна быть дыты меньше чем  {date}.",
            "before_or_equal": "{attribute} должна быть меньше или равно to {date}.",
            "between": {
                "numeric": "{attribute} должен быть в интервале между {min} и {max}.",
                "file": "{attribute} размер должен составлять от {min} до {max} kilobytes.",
                "string": "{attribute} должно быть от {min} до {max} символов.",
                "array": "{attribute} долже содержать от  {min} до {max} элементов."
            },
            "boolean": "{attribute} поле может иметь значения true или false.",
            "confirmed": "{attribute} не совпадает с подтверждением.",
            "date": "{attribute} даиа не валидна.",
            "date_equals": "{attribute} дата должна соответствовать {date}.",
            "date_format": "{attribute} не совпадает формат с {format}.",
            "different": "{attribute} и {other} должны отличаться друг от друга.",
            "digits": "{attribute} должен содержать {digits} чисел.",
            "digits_between": "{attribute} должен содержать не менее {min} и  не более {max} чисел.",
            "dimensions": "{attribute} не рисунок.",
            "distinct": "{attribute} поле содержит повторения.",
            "email": "{attribute} должен быть валидным email адресом.",
            "exists": "выбран не верный параметр: {attribute}.",
            "file": "{attribute} должен быть файлом.",
            "filled": "{attribute} поле должно иметь значения.",
            "gt": {
                "numeric": "{attribute} должно быть больше {value}.",
                "file": "{attribute} должен быть больше {value} kilobytes.",
                "string": "{attribute} должен иметь больше {value} символов.",
                "array": "{attribute} должен содержать не менее{value} элементов."
            },
            "gte": {
                "numeric": "{attribute} должно быть больше или равно {value}.",
                "file": "{attribute} должно быть больше или равно {value} kilobytes.",
                "string": "{attribute} должно быть больше или равно {value} символов.",
                "array": "{attribute} должно быть больше или равно {value} элементов."
            },
            "image": "{attribute} должно быть рисунком.",
            "in": "Вы выбрали не верный {attribute}.",
            "in_array": "{attribute} не относиться {other}.",
            "integer": "{attribute} должен быть цислом.",
            "ip": "{attribute} должен быть правильным IP адресом.",
            "ipv4": "{attribute} должен быть правильным IPv4 адресом.",
            "ipv6": "{attribute} должен быть правильным IPv6 адресом.",
            "json": "{attribute} должен быть правильным JSON.",
            "lt": {
                "numeric": "{attribute} должен быть меньше чем {value}.",
                "file": "{attribute} должен быть меньше чем  {value} kilobytes.",
                "string": "{attribute} должен быть меньше чем {value} символов.",
                "array": "{attribute} должен быть меньше чем  {value} элементов."
            },
            "lte": {
                "numeric": "{attribute} должен быть меньше или равен {value}.",
                "file": "{attribute} должен быть меньше или равен  {value} kilobytes.",
                "string": "{attribute} должен быть меньше или равен  {value} символам.",
                "array": "{attribute} должен быть меньше или равен  {value} элементам."
            },
            "max": {
                "numeric": "{attribute} не может быть больше {max}.",
                "file": "{attribute} не может быть больше {max} kilobytes.",
                "string": "{attribute} не может быть больше {max} символов.",
                "array": "{attribute} не может быть больше {max} элементов."
            },
            "mimes": "{attribute} должен соответствовать типу: {values}.",
            "mimetypes": "{attribute} должны соответствовать типу: {values}.",
            "min": {
                "numeric": "{attribute} должен быть меньше {min}.",
                "file": "{attribute} должен быть меньше {min} kilobytes.",
                "string": "{attribute} должен быть меньше {min} символов.",
                "array": "{attribute} должен быть меньше {min} элементов."
            },
            "not_in": "Выбран не верный {attribute}.",
            "not_regex": "{attribute} имеет не верный формат.",
            "numeric": "{attribute} должен быть числом.",
            "present": "{attribute} поле должно быть заполнено.",
            "regex": "{attribute} не верный формат.",
            "required": "{attribute} поля обязательно к заполнению.",
            "required_if": "{attribute} обязательно к заполнению {other} если {value}.",
            "required_unless": "{attribute} обязательно к заполнению если {other} содержить {values}.",
            "required_with": "{attribute} обязательно к заполению если {values} присутствует.",
            "required_with_all": "{attribute} надо заполнить если {values} заполнены.",
            "required_without": "{attribute} надо заполнить если {values} отсутствуют.",
            "required_without_all": "{attribute} надо заполнить если нет ни одного {values} ",
            "same": "The {attribute} and {other} must match.",
            "size": {
                "numeric": "{attribute} должен иметь {size}.",
                "file": "{attribute} должен иметь {size} kilobytes.",
                "string": "{attribute} должен иметь {size} символов.",
                "array": "{attribute} должен иметь {size} элементов."
            },
            "starts_with": "{attribute} должен начинаться с: {values}",
            "string": "{attribute} должен быть строкой.",
            "timezone": "{attribute} не верный часовой пояс.",
            "unique": "{attribute} уже используется.",
            "uploaded": "{attribute} не удалось загрузить.",
            "url": "{attribute} не верный фомат URL.",
            "uuid": "{attribute} должен иметь правильный UUID.",
            "custom": {
                "attribute-name": {
                    "rule-name": "custom-message"
                }
            },
            "attributes": []
        },
        "commands": {
            "user{add}": {
                "description": "Создание локального пользователя. Вы сможете воспользоваться созданными учетными данными если вы используете авторизацию mysql",
                "arguments": {
                    "username": "Имя пользователя с которым вы будете проходить авторизацию"
                },
                "options": {
                    "descr": "Описание пользователя",
                    "email": "Email пользователя",
                    "password": "Пароль пользователя, если не введен, то будет предложенно",
                    "full-name": "Полное имя пользователя",
                    "role": "Пользователю будет назначена роль {roles}"
                },
                "password-request": "Пожалуйста введите пароль",
                "success": "Успешно создан пользователь: {username}",
                "wrong-auth": "Внимание! вы не смогли пройти авторизация, так как вы не используете  MySQL авторизацию"
            }
        },
        "preferences": {
            "lang": "русский"
        },
        "passwords": {
            "password": "Пароль должен содержать не менее шести символов и должен совпадать с подтверждением.",
            "reset": "Ваш пароль был сброшен!",
            "sent": "Мы отправили вам ссылку на email для обновления пароля",
            "token": "Токен обновления пароля валиден.",
            "user": "Мы не можем найти пользователя с таким адресом email."
        },
        "Shutdown": "Shutdown",
        "The {attribute} must a valid IP address/network or hostname.": "{attribute} должен быть правильным IP адресом/подсетью или именем устройства.",
        "Never polled": "Никогда не опрашивался",
        "This indicates the most likely endpoint switchport": "Это указывает на наиболее вероятый порт устройства",
        "Two-Factor unlocked.": "Второй этап аутентификации разблокирован.",
        "Failed to unlock Two-Factor.": "Не удалось проверить второй этап аутентификации",
        "Two-Factor removed.": "Второй этап аутентификации удален.",
        "Failed to remove Two-Factor.": "Не удалось удалить второй этап аутентификации.",
        "TwoFactor auth removed.": "Двуфакторная аутентификация удалена.",
        "Too many two-factor failures, please contact administrator.": "Слишком много не удачных попыток, свяжитесь с администратором.",
        "Too many two-factor failures, please wait {time} seconds": "Слишком много неудачных попыток, подождите {time} секунд",
        "No Two-Factor Token entered.": "Не введен проверочный токен второго этап аутентификации.",
        "No Two-Factor settings, how did you get here?": "Второй этап аутентификации не настроен, как вы сюда смогли попасть?",
        "Wrong Two-Factor Token.": "Не правильный токен второго этап аутентификации.",
        "TwoFactor auth added.": "Второй этап аутентификации добавлен.",
        "User {username} created": "Пользователь {username} создан",
        "Failed to create user": "Не удалось создать пользователя",
        "Updated dashboard for {username}": "Обновлен главный жкран пользователя {username}",
        "User {username} updated": "Пользователь {username} обновлен",
        "Failed to update user {username}": "Не удалось обновить пользователя{username}",
        "User {username} deleted.": "Пользователь {username} удален.",
        "Device does not exist": "Устройство не существует",
        "Port does not exist": "Порт не существует",
        "App does not exist": "Приложение не существует",
        "Bill does not exist": "Счет не существует",
        "Munin plugin does not exist": "Munin плагин не существует",
        "Ok": "Ok",
        "Warning": "Предупреждение",
        "Critical": "Критический",
        "Existing password did not match": "Не совпадает с существующим паролем",
        "The {attribute} field is required.": "Поле {attribute} обязательно.",
        "Edit User": "Изменить пользователя",
        "Unlock": "Разблокировать",
        "User exceeded failures": "Пользователь допустил много ошибок",
        "Disable TwoFactor": "Отключить двуфакторную аутентификацию",
        "No TwoFactor key generated for this user, Nothing to do.": "Не сгенерирован ключ для двуфакторной аутентификации.",
        "Save": "Сохранить",
        "Cancel": "Отмена",
        "Unlocked Two Factor.": "Разблокирован двуфакторная аутентификация.",
        "Failed to unlock Two Factor": "Не удалось разблокировать двухфакторную аутентификацию",
        "Removed Two Factor.": "Убрана второй фактор.",
        "Failed to remove Two Factor": "Не удалось убрать второй фактор",
        "Real Name": "Настоящее имя",
        "Email": "Email",
        "Description": "Описание",
        "Level": "Уровень",
        "Normal": "Нормально",
        "Global Read": "Глобальное Чтение",
        "Admin": "Admin",
        "Demo": "Demo",
        "Dashboard": "Панель",
        "Password": "Пароль",
        "Current Password": "Действующий пароль",
        "New Password": "Новый пароль",
        "Confirm Password": "Подтверждение пароля",
        "Can Modify Password": "Можно изменить пароль",
        "Create User": "Создать пользователя",
        "Username": "Имя пользователя",
        "Manage Users": "Управление пользователями",
        "ID": "ID",
        "Access": "Доступ",
        "Auth": "Аутентификация",
        "Actions": "Действие",
        "Edit": "Изменить",
        "Delete": "Удалить",
        "Manage Access": "Управление доступом",
        "Add User": "Создать пользователя",
        "Are you sure you want to delete ": "Вы уверены, что хотите удалить ",
        "The user could not be deleted": "Пользователь не может быть удален",
        "Whoops, the web server could not write required files to the filesystem.": "Ой, вэб сервер не может записать файл в файловую систему.",
        "Running the following commands will fix the issue most of the time:": "Выполнение данной команды исправить ошибку в четении time:",
        "Whoops, looks like something went wrong. Check your librenms.log.": "Ой, что-то сломалось, проверьте librenms.log.",
        "Public Devices": "Общее устройство",
        "System Status": "Статус Системы",
        "Logon": "Вход",
        "Device": "Устройство",
        "Platform": "Платформа",
        "Uptime": "Аптайм",
        "Location": "Расположение",
        "Status": "Статус",
        "Remember Me": "Запомнить меня",
        "Login": "Логин",
        "Please enter auth token": "Пожалуйста введите токен авторизации",
        "Submit": "Выполнить",
        "Logout": "Выйти",
        "Locations": "Расположения",
        "Coordinates": "Координаты",
        "Devices": "Устройства",
        "Network": "Сеть",
        "Servers": "Сервера",
        "Firewalls": "Фаерволы",
        "Down": "Лежит",
        "Save changes": "Сохранить изменения",
        "N/A": "N/A",
        "Location must have devices to show graphs": "Расположение должно иметь устройства для отображения графиков",
        "Traffic": "Траффик",
        "Cannot delete locations used by devices": "Не могу удалить расположение, применяемое устройством",
        "Location deleted": "Расположение удалено",
        "Failed to delete location": "Не удалось удалить расположение",
        "Timestamp": "Метка времени",
        "Source": "Источник",
        "Message": "Сообщение",
        "Facility": "Объект",
        "Total hosts": "Всего хостов",
        "ignored": "Игнорируемо",
        "disabled": "Откючено",
        "up": "работает",
        "warn": "внимание",
        "down": "лежит",
        "Total services": "Всего сервисов",
        "Widget title": "Заготовок виджета",
        "Default Title": "Заголовок по умолчанию",
        "Columns": "Колонка",
        "Markers": "Маркеры",
        "Ports": "Порты",
        "Resolution": "Разрешение",
        "Countries": "Страны",
        "Provinces": "Провинции",
        "Metros": "Метро",
        "Region": "Регион",
        "Help": "Помощь",
        "Stream": "Поток",
        "All Messages": "Все сообщения",
        "All Devices": "Все устройства",
        "Page Size": "Размер страницы",
        "Time Range": "Интервал времени",
        "Search all time": "Искать постоянно",
        "Search last 5 minutes": "Искать последние 5 минут",
        "Search last 15 minutes": "Искать последние 15 минут",
        "Search last 30 minutes": "Искать последние 30 минут",
        "Search last 1 hour": "Искать последний 1 час",
        "Search last 2 hours": "Искать последние 2 часа",
        "Search last 8 hours": "Искать последние 8 часов",
        "Search last 1 day": "Искать последний 1 день",
        "Search last 2 days": "Искать последние 2 дня",
        "Search last 5 days": "Искать последние 5 дней",
        "Search last 7 days": "Искать последние 7 дней",
        "Search last 14 days": "Искать последние 14 дней",
        "Search last 30 days": "Искать последние 30 дней",
        "Custom title": "Изменяемое название",
        "Initial Latitude": "Начальная широта",
        "ie. 51.4800 for Greenwich": "51.4800 по Гринвичу",
        "Initial Longitude": "Начальная долгота",
        "ie. 0 for Greenwich": "0 по Гринвичу",
        "Initial Zoom": "Начальное увеличение",
        "Grouping radius": "Радиус группировки",
        "default 80": "по умолчанию 80",
        "Show devices": "показать устройства",
        "Up + Down": "подняты + лежат",
        "Up": "Поднято",
        "Show Services": "Показать сервисы",
        "no": "нет",
        "yes": "да",
        "Show Port Errors": "Показать ошибки портов",
        "Notes": "Заметки",
        "Custom title for widget": "Изменяемый заголовок для виджета",
        "Display type": "Отображаемый тип",
        "boxes": "боксы",
        "compact": "компактный",
        "Uniform Tiles": "Равномерная плитка",
        "Tile size": "Размер заголовка",
        "Disabled/ignored": "Выключенно/игнорированно",
        "Show": "Показать",
        "Hide": "Скрыть",
        "Mode select": "Выюбр режима",
        "only devices": "только устройства",
        "only services": "только сервисы",
        "devices and services": "устройства и сервисы",
        "Order By": "Группировать по",
        "Hostname": "Имя устройства",
        "Device group": "Группа устройств",
        "Automatic Title": "Автоматическое наименование",
        "Graph type": "Тип графика",
        "Select a graph": "Выберите граф",
        "Show legend": "Показать пояснение",
        "Date range": "Интервал дат",
        "One Hour": "Один час",
        "Four Hours": "Четыре часа",
        "Six Hours": "Шесть часов",
        "Twelve Hours": "Двенадцать часов",
        "One Day": "Один день",
        "One Week": "Одна неделя",
        "Two Weeks": "Две недели",
        "One Month": "Один месяц",
        "Two Months": "Два месяца",
        "Three Months": "Три месяца",
        "One Year": "Один Год",
        "Two Years": "Два Года",
        "Select a device": "Выберите устройство",
        "Port": "Порт",
        "Select a port": "Выберите порт",
        "Application": "Приложение",
        "Select an application": "Выберите приложение",
        "Munin plugin": "Munin плагин",
        "Select a Munin plugin": "Выберите Munin плагин",
        "Bill": "Счет",
        "Select a bill": "Выберите счйт",
        "Custom Aggregator(s)": "Пользовательский аггрегатор(ций)",
        "Select or add one or more": "Выберите или добавьте один или более",
        "Select one or more": "Выберите один или более",
        "Top query": "Основной запрос",
        "Response time": "Время ответа",
        "Poller duration": "Длительнось обработки",
        "Processor load": "Загрузка процессора",
        "Memory usage": "Использвание памяти",
        "Disk usage": "Использование диска",
        "Sort order": "Сортировка",
        "Ascending": "по возрастанию",
        "Descending": "по убыванию",
        "Number of Devices": "Номер устройсва",
        "Last Polled (minutes)": "Последняя обработка (минут)",
        "Image URL": "URL изображения",
        "Target URL": "URL цели",
        "Show acknowledged": "показать подтвержденные",
        "not filtered": "не отфильтрованно",
        "show only acknowledged": "показать только подтвержденные",
        "hide acknowledged": "скрыть подтвержденные",
        "Show only fired": "показать пропущенные",
        "show only fired alerts": "показать только пропущенные",
        "Displayed severity": "Отобразить важные",
        "any severity": "любая важность",
        "or higher": "или высокая",
        "State": "Состояние",
        "any state": "любое состояние",
        "All alerts": "Все предупреждения",
        "Show Procedure field": "Показать процедуру",
        "show": "показать",
        "hide": "скрыть",
        "Sort alerts by": "Отсортировать предупреждения по",
        "timestamp, descending": "метка времени, по возрастанию",
        "severity, descending": "важность, по возрастанию",
        "All devices": "Все устройства",
        "Event type": "Тип события",
        "All types": "Все типы",
        "Number of interfaces": "Количество интерфейсов",
        "Last polled (minutes)": "Последня обработка (минут)",
        "Interface type": "Тип интерфейса",
        "All Ports": "Все порты",
        "Total": "Всего",
        "Ignored": "Игнорированно",
        "Disabled": "Отключено",
        "Errored": "Ошибок",
        "Services": "Сервисы",
        "No devices found within interval.": "В этот интервал не попало ни одного устройсктва.",
        "Summary": "Суммарно",
        "Interface": "Интерфейс",
        "Total traffic": "Общий трафик",
        "Check your log for more details.": "Проверьте лог для большей информации..",
        "If you need additional help, you can find how to get help at": "Если вам нужна дополнительная помощь, вы можете узнать как ее получить",
        "Geo Locations": "Гео расположение",
        "All Locations": "Все расположения",
        "Pollers": "Обработчики",
        "Groups": "Группы",
        "Performance": "Производительность",
        "History": "История"
    }
}

})));