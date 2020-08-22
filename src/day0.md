# SOLID
相信大家都有過接手前人程式的經驗，
看過許多Legacy code,
有的寫得很好且乾淨,
有的寫得如同義大利麵一般通通糊在一起.
抽象與介面的使用時機不清不楚,許多功能也都互相依賴,
有時還會噴出非預期內的結果,
正當要改寫或擴充時,就需要花上許多時間理解並分拆
這時,如果前人有辦法遵守SOLID原則,
把該解的依賴都解一解,這樣不只是code的乾淨程度提升,
更是方便撰寫測試.

這邊藉由IOC的介紹,一步一步解依賴,並且符合[SOLID](https://en.wikipedia.org/wiki/SOLID)原則.

# User Story
藉由小明的一週,來了解IOC(Inversion of Control)的運作,
要實做IOC就使用DI(Dependency Injection依賴注入),
要符合SOLID就要使用DIP(Dependency Inversion Principle依賴倒置),
並且理解實做IOC給予的好處.

