export enum EVENT_ERROR_REASON_ENUM {
	statusNotAllowed = 'animal-status-not-allowed',
	statusNotAllowedPregnant = 'animal-status-not-allowed-pregnant',
	statusNotAllowedDry = 'animal-status-not-allowed-dry',
	statusNotAllowedDnb = 'animal-status-not-allowed-dnb',
	statusNotAllowedSold = 'animal-status-not-allowed-sold',
	statusNotAllowedDied = 'animal-status-not-allowed-died',
	statusNotAllowedBred = 'animal-status-not-allowed-bred',
	statusNotAllowedFresh = 'animal-status-not-allowed-fresh',
	statusNotAllowedHeifer = 'animal-status-not-allowed-heifer',
	statusNotAllowedOpen = 'animal-status-not-allowed-open',
	statusForFirstRecheckBredOnly = 'animal-status-for-first-recheck-bred-only',
	notACow = 'animal-not-a-cow',
	tooYoung = 'animal-too-young',
}

export enum EVENT_EXEC_STATUS_ENUM {
	waiting = 'waiting',
	done = 'done',
	cancel = 'cancel',
	block = 'block',
}

export enum TRANSFEROUT_TYPES_ENUM {
	transferOut = 'transferOut',
	died = 'died',
}

export enum TRANSFEROUT_REASON_ENUM {
	leikoz = 'leikoz', // Лейкоз
	tuberkulez = 'tuberkulez', // Туберкулез
	klostirikoz = 'klostirikoz', // Клостридиоз
	nekrobacilez = 'nekrobacilez', // Некробациллез
	aktinomikoz = 'aktinomikoz', // Актиномикоз)
	ginekologic = 'ginekologic', // Гинекологические заболевания
	metabolicDisorders = 'metabolicDisorders', // Нарушения обмена веществ
	Infertility = 'infertility', // Бесплодие
	udderDiseases = 'udderDiseases', // Болезни вымени
	lameness = 'lameness', // Хромота
	breedingSales = 'breedingSales', // Племпродажа
	salesToThePublic = 'salesToThePublic', // Продажа населению
	theft = 'theft', // Кража
	dead = 'dead', // сдохла
}

export enum DISEASES_ENUM {
	PREVENTION = 'prevention', // Профилактика
	VACCTINATION = 'vaccination', // Вакцинация
	MASTITIS = 'mastitis', // Мастит
	METRITIS = 'metritis', // Метрит
	PARESIS = 'paresis', // Парез
	TEMPERATURE = 'temperature', // Температура
	ABOMASUM_DISPLACEMENT = 'abomasum_displacement', // Смещение сычуга
	LAMENESS = 'lameness', // Хромота
	INJURY = 'injury', // Травма
	DEHORNING = 'dehorning', // Обезроживание
	METABOLIC_DISEASE = 'metabolic disease', // Нарушение обмена веществ
	DIARRHEA = 'diarrhea', // Диарея
	ATONY = 'atony', // Атония
	PNEUMONIA = 'pneumonia', // Пневмония
	TYMPANY = 'tympany', // Тимпания
	HEALTHY = 'healthy', // Здорова
	KETOSIS = 'ketosis', // Кетоз
	CONJUNCTEVITIS = 'conjunctevitis', // Коньюктевит
	DIPEPSIA = 'dipepsia', // Дипепсия
	SYNCHRONIZATION = 'synchronization', // Синхронизация
	OTHER = 'other', // Иное
}

export enum MEDMETHOD_ENUM {
	SUBCUTANEOUSLY = 'subcutaneously', // подкожно
	NASALLY = 'nasally', // нозально
	INTRAMUSCULARLY = 'intramuscularly', // внутримышечно
	INTRACISTERNALLY = 'intracesternally', // внутрицестернально
	ORALLY = 'orally', // орально
	INTRAVENOUSLY = 'intravenously', // внутривенно
	INTRAUTERINE = 'intrauterine', // внутриматочно
	INTRAVAGINALLY = 'intravaginally', // внутривагинально
}

export enum EVENT_TYPES_ENUM {
	otel = 'otel', // ОТЕЛ ----- addTocalendar
	recheck = 'recheck', // ПЕРЕПРОВЕРИТЬ * ----- addTocalendar
	ohota = 'ohota', // ОХОТА ----- addTocalendar
	osemenenie = 'osemenenie', // ОСЕМЕНЕНИЕ *
	stelnaya = 'stelnaya', // СТЕЛЬНАЯ
	yalovaya = 'yalovaya', // ЯЛОВАЯ (НЕ СТЕЛЬНАЯ) ----- addTocalendar
	stelneotpos = 'stelneotpos', // СТЕЛЬНАЯ НЕ ОТ ПОС ОСЕМЕНЕНИЯ ----- addTocalendar
	perevod = 'perevod', // ПЕРЕВОД
	kbiku = 'kbiku', // КБЫКУ ----- addTocalendar
	suhostoi = 'suhostoi', //'СУХОСТОЙ ----- addTocalendar
	abort = 'abort', // АБОРТ
	neosem = 'neosem', // НЕОСЕМ (БРАК) *
	prodazha = 'prodazha', // ПРОДАЖА ----- addTocalendar
	pala = 'pala', // ПАЛА ----- addTocalendar
	zamenaNomera = 'zamenaNomera', // ЗАМЕНА НОМЕРА ----- addTocalendar
	obrKopit = 'obrKopit', // ОБРАБОТКА КОПЫТ
	pozSuhostoi = 'pozSuhostoi', // ПОЗСУХОСТОЙ
	ves = 'ves', // ВЕС
	rost = 'rost', // РОСТ
	upitannost = 'upitannost', // УПИТАННОСТЬ
	zaboi = 'zaboi', // ЗАБОЙ
	sinchronizatsia = 'sinchronizatsia', // СИНХРОНИЗАЦИЯ
	transferOut = 'transferOut', // выбытие
	treatment = 'treatment', // лечение
}