<?php

// autoload_classmap.php @generated by Composer

$vendorDir = dirname(dirname(__FILE__));
$baseDir = dirname($vendorDir);

return array(
    'ABCDParisController' => $baseDir . '/app/controllers/ABCDParisController.php',
    'AddActifToCompetitions' => $baseDir . '/app/database/migrations/2015_09_16_165807_add_actif_to_competitions.php',
    'AddColumnShortname' => $baseDir . '/app/database/migrations/2015_09_16_072744_add_column_shortname.php',
    'AddForeignkeyPariIdToSelections' => $baseDir . '/app/database/migrations/2015_11_06_040505_add_foreignkey_pari_id_to_selections.php',
    'AddSoftdeleteToTermineparis' => $baseDir . '/app/database/migrations/2015_09_29_053137_add_softdelete_to_termineparis.php',
    'AdminController' => $baseDir . '/app/controllers/AdminController.php',
    'AjaxController' => $baseDir . '/app/controllers/AjaxController.php',
    'AuthController' => $baseDir . '/app/controllers/AuthController.php',
    'BaseController' => $baseDir . '/app/controllers/BaseController.php',
    'BettorController' => $baseDir . '/app/controllers/BettorController.php',
    'Bookmaker' => $baseDir . '/app/models/Bookmaker.php',
    'BookmakerController' => $baseDir . '/app/controllers/BookmakerController.php',
    'BookmakerTableSeeder' => $baseDir . '/app/database/seeds/BookmakerTableSeeder.php',
    'BookmakerUser' => $baseDir . '/app/models/BookmakerUser.php',
    'BookmakerUserTableSeeder' => $baseDir . '/app/database/seeds/BookmakerUserTableSeeder.php',
    'Cartalyst\\Sentry\\Groups\\GroupExistsException' => $vendorDir . '/cartalyst/sentry/src/Cartalyst/Sentry/Groups/Exceptions.php',
    'Cartalyst\\Sentry\\Groups\\GroupNotFoundException' => $vendorDir . '/cartalyst/sentry/src/Cartalyst/Sentry/Groups/Exceptions.php',
    'Cartalyst\\Sentry\\Groups\\NameRequiredException' => $vendorDir . '/cartalyst/sentry/src/Cartalyst/Sentry/Groups/Exceptions.php',
    'Cartalyst\\Sentry\\Throttling\\UserBannedException' => $vendorDir . '/cartalyst/sentry/src/Cartalyst/Sentry/Throttling/Exceptions.php',
    'Cartalyst\\Sentry\\Throttling\\UserSuspendedException' => $vendorDir . '/cartalyst/sentry/src/Cartalyst/Sentry/Throttling/Exceptions.php',
    'Cartalyst\\Sentry\\Users\\LoginRequiredException' => $vendorDir . '/cartalyst/sentry/src/Cartalyst/Sentry/Users/Exceptions.php',
    'Cartalyst\\Sentry\\Users\\PasswordRequiredException' => $vendorDir . '/cartalyst/sentry/src/Cartalyst/Sentry/Users/Exceptions.php',
    'Cartalyst\\Sentry\\Users\\UserAlreadyActivatedException' => $vendorDir . '/cartalyst/sentry/src/Cartalyst/Sentry/Users/Exceptions.php',
    'Cartalyst\\Sentry\\Users\\UserExistsException' => $vendorDir . '/cartalyst/sentry/src/Cartalyst/Sentry/Users/Exceptions.php',
    'Cartalyst\\Sentry\\Users\\UserNotActivatedException' => $vendorDir . '/cartalyst/sentry/src/Cartalyst/Sentry/Users/Exceptions.php',
    'Cartalyst\\Sentry\\Users\\UserNotFoundException' => $vendorDir . '/cartalyst/sentry/src/Cartalyst/Sentry/Users/Exceptions.php',
    'Cartalyst\\Sentry\\Users\\WrongPasswordException' => $vendorDir . '/cartalyst/sentry/src/Cartalyst/Sentry/Users/Exceptions.php',
    'Competition' => $baseDir . '/app/models/Competition.php',
    'CompetitionEquipe' => $baseDir . '/app/models/CompetitionEquipe.php',
    'CompetitionTableSeeder' => $baseDir . '/app/database/seeds/CompetitionTableSeeder.php',
    'ConfigController' => $baseDir . '/app/controllers/ConfigController.php',
    'Country' => $baseDir . '/app/models/Country.php',
    'CountryTableSeeder' => $baseDir . '/app/database/seeds/CountryTableSeeder.php',
    'Coupon' => $baseDir . '/app/models/Coupon.php',
    'CouponController' => $baseDir . '/app/controllers/CouponController.php',
    'CouponTableTableSeeder' => $baseDir . '/app/database/seeds/CouponTableTableSeeder.php',
    'CreateAutoincrementValues' => $baseDir . '/app/database/migrations/2015_08_18_152403_create_autoincrement_values.php',
    'CreateBookmakerUserTable' => $baseDir . '/app/database/migrations/2014_10_29_132406_create_bookmaker_user_table.php',
    'CreateBookmakersTable' => $baseDir . '/app/database/migrations/2014_09_14_043956_create_bookmakers_table.php',
    'CreateCompetitionEquipeTable' => $baseDir . '/app/database/migrations/2015_04_24_175328_create_competition_equipe_table.php',
    'CreateCompetitionsTable' => $baseDir . '/app/database/migrations/2015_01_25_160820_create_competitions_table.php',
    'CreateCountriesTable' => $baseDir . '/app/database/migrations/2015_01_25_160259_create_countries_table.php',
    'CreateCouponTable' => $baseDir . '/app/database/migrations/2015_05_22_032137_create_coupon_table.php',
    'CreateDevisesTable' => $baseDir . '/app/database/migrations/2014_12_23_160504_create_devises_table.php',
    'CreateEnCoursParisTable' => $baseDir . '/app/database/migrations/2015_01_25_162808_create_en_cours_paris_table.php',
    'CreateEquipesTable' => $baseDir . '/app/database/migrations/2015_01_25_165700_create_equipes_table.php',
    'CreateFollowtypeLogsTable' => $baseDir . '/app/database/migrations/2014_12_29_040923_create_followtype_logs_table.php',
    'CreateForeignKeysTable' => $baseDir . '/app/database/migrations/2015_01_25_183344_create_foreign_keys_table.php',
    'CreateMarketsTable' => $baseDir . '/app/database/migrations/2015_06_08_001149_create_markets_table.php',
    'CreateMtMoisTipsterTable' => $baseDir . '/app/database/migrations/2014_12_29_052535_create_mt_mois_tipster_table.php',
    'CreateMtUniteLogsTable' => $baseDir . '/app/database/migrations/2015_01_21_053612_create_mt_unite_logs_table.php',
    'CreateParisTable' => $baseDir . '/app/database/migrations/2015_11_06_033548_create_paris_table.php',
    'CreatePasswordRemindersTable' => $baseDir . '/app/database/migrations/2015_05_16_214740_create_password_reminders_table.php',
    'CreateScopesTable' => $baseDir . '/app/database/migrations/2015_06_08_002304_create_scopes_table.php',
    'CreateSelectionsTable' => $baseDir . '/app/database/migrations/2015_06_25_168700_create_selections_table.php',
    'CreateSportMarketTable' => $baseDir . '/app/database/migrations/2015_06_08_005706_create_sport_market_table.php',
    'CreateSportScopeTable' => $baseDir . '/app/database/migrations/2015_06_08_012428_create_sport_scope_table.php',
    'CreateSportsTable' => $baseDir . '/app/database/migrations/2015_01_25_155939_create_sports_table.php',
    'CreateTermineParisTable' => $baseDir . '/app/database/migrations/2015_02_01_035211_create_termine_paris_table.php',
    'CreateTipstersTable' => $baseDir . '/app/database/migrations/2014_09_13_221709_create_tipsters_table.php',
    'CreateTransactionsTable' => $baseDir . '/app/database/migrations/2014_11_02_190904_create_transactions_table.php',
    'CreateTypeParisTable' => $baseDir . '/app/database/migrations/2015_01_25_162014_create_type_paris_table.php',
    'CreateTypeResultatsTable' => $baseDir . '/app/database/migrations/2015_01_25_162647_create_type_resultats_table.php',
    'CreateUsersTable' => $baseDir . '/app/database/migrations/2014_09_09_153848_create_users_table.php',
    'DashboardController' => $baseDir . '/app/controllers/DashboardController.php',
    'DatabaseSeeder' => $baseDir . '/app/database/seeds/DatabaseSeeder.php',
    'Devise' => $baseDir . '/app/models/Devise.php',
    'DeviseTableSeeder' => $baseDir . '/app/database/seeds/DeviseTableSeeder.php',
    'Dollar\\Generators\\Generators\\ControllerGenerator' => $vendorDir . '/dollar/generators/src/Dollar/Generators/Generators/ControllerGenerator.php',
    'Dollar\\Generators\\Generators\\FormDumperGenerator' => $vendorDir . '/dollar/generators/src/Dollar/Generators/Generators/FormDumperGenerator.php',
    'Dollar\\Generators\\Generators\\Generator' => $vendorDir . '/dollar/generators/src/Dollar/Generators/Generators/Generator.php',
    'Dollar\\Generators\\Generators\\MigrationGenerator' => $vendorDir . '/dollar/generators/src/Dollar/Generators/Generators/MigrationGenerator.php',
    'Dollar\\Generators\\Generators\\ModelGenerator' => $vendorDir . '/dollar/generators/src/Dollar/Generators/Generators/ModelGenerator.php',
    'Dollar\\Generators\\Generators\\RequestedCacheNotFound' => $vendorDir . '/dollar/generators/src/Dollar/Generators/Generators/Generator.php',
    'Dollar\\Generators\\Generators\\ResourceGenerator' => $vendorDir . '/dollar/generators/src/Dollar/Generators/Generators/ResourceGenerator.php',
    'Dollar\\Generators\\Generators\\ScaffoldGenerator' => $vendorDir . '/dollar/generators/src/Dollar/Generators/Generators/ScaffoldGenerator.php',
    'Dollar\\Generators\\Generators\\SeedGenerator' => $vendorDir . '/dollar/generators/src/Dollar/Generators/Generators/SeedGenerator.php',
    'Dollar\\Generators\\Generators\\TestGenerator' => $vendorDir . '/dollar/generators/src/Dollar/Generators/Generators/TestGenerator.php',
    'Dollar\\Generators\\Generators\\ViewGenerator' => $vendorDir . '/dollar/generators/src/Dollar/Generators/Generators/ViewGenerator.php',
    'EnCoursParis' => $baseDir . '/app/models/EnCoursParis.php',
    'EnCoursParisController' => $baseDir . '/app/controllers/EnCoursParisController.php',
    'EnCoursParisTableSeeder' => $baseDir . '/app/database/seeds/EnCoursParisTableSeeder.php',
    'Equipe' => $baseDir . '/app/models/Equipe.php',
    'EquipeTableSeeder' => $baseDir . '/app/database/seeds/EquipeTableSeeder.php',
    'FAQController' => $baseDir . '/app/controllers/FAQController.php',
    'FollowtypeLogs' => $baseDir . '/app/models/FollowtypeLogs.php',
    'Historique' => $baseDir . '/app/models/Historique.php',
    'IlluminateQueueClosure' => $vendorDir . '/laravel/framework/src/Illuminate/Queue/IlluminateQueueClosure.php',
    'Maatwebsite\\Excel\\Classes\\Cache' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Classes/Cache.php',
    'Maatwebsite\\Excel\\Classes\\FormatIdentifier' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Classes/FormatIdentifier.php',
    'Maatwebsite\\Excel\\Classes\\LaravelExcelWorksheet' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Classes/LaravelExcelWorksheet.php',
    'Maatwebsite\\Excel\\Classes\\PHPExcel' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Classes/PHPExcel.php',
    'Maatwebsite\\Excel\\Collections\\CellCollection' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Collections/CellCollection.php',
    'Maatwebsite\\Excel\\Collections\\ExcelCollection' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Collections/ExcelCollection.php',
    'Maatwebsite\\Excel\\Collections\\RowCollection' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Collections/RowCollection.php',
    'Maatwebsite\\Excel\\Collections\\SheetCollection' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Collections/SheetCollection.php',
    'Maatwebsite\\Excel\\Excel' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Excel.php',
    'Maatwebsite\\Excel\\ExcelServiceProvider' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/ExcelServiceProvider.php',
    'Maatwebsite\\Excel\\Exceptions\\LaravelExcelException' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Exceptions/LaravelExcelException.php',
    'Maatwebsite\\Excel\\Facades\\Excel' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Facades/Excel.php',
    'Maatwebsite\\Excel\\Files\\ExcelFile' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Files/ExcelFile.php',
    'Maatwebsite\\Excel\\Files\\ExportHandler' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Files/ExportHandler.php',
    'Maatwebsite\\Excel\\Files\\File' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Files/File.php',
    'Maatwebsite\\Excel\\Files\\ImportHandler' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Files/ImportHandler.php',
    'Maatwebsite\\Excel\\Files\\NewExcelFile' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Files/NewExcelFile.php',
    'Maatwebsite\\Excel\\Filters\\ChunkReadFilter' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Filters/ChunkReadFilter.php',
    'Maatwebsite\\Excel\\Parsers\\CssParser' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Parsers/CssParser.php',
    'Maatwebsite\\Excel\\Parsers\\ExcelParser' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Parsers/ExcelParser.php',
    'Maatwebsite\\Excel\\Parsers\\ViewParser' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Parsers/ViewParser.php',
    'Maatwebsite\\Excel\\Readers\\Batch' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Readers/Batch.php',
    'Maatwebsite\\Excel\\Readers\\ConfigReader' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Readers/ConfigReader.php',
    'Maatwebsite\\Excel\\Readers\\Html' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Readers/HtmlReader.php',
    'Maatwebsite\\Excel\\Readers\\LaravelExcelReader' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Readers/LaravelExcelReader.php',
    'Maatwebsite\\Excel\\Writers\\CellWriter' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Writers/CellWriter.php',
    'Maatwebsite\\Excel\\Writers\\LaravelExcelWriter' => $vendorDir . '/maatwebsite/excel/src/Maatwebsite/Excel/Writers/LaravelExcelWriter.php',
    'Market' => $baseDir . '/app/models/Market.php',
    'MarketController' => $baseDir . '/app/controllers/MarketController.php',
    'MigrationCartalystSentryInstallGroups' => $vendorDir . '/cartalyst/sentry/src/migrations/2012_12_06_225929_migration_cartalyst_sentry_install_groups.php',
    'MigrationCartalystSentryInstallThrottle' => $vendorDir . '/cartalyst/sentry/src/migrations/2012_12_06_225988_migration_cartalyst_sentry_install_throttle.php',
    'MigrationCartalystSentryInstallUsers' => $vendorDir . '/cartalyst/sentry/src/migrations/2012_12_06_225921_migration_cartalyst_sentry_install_users.php',
    'MigrationCartalystSentryInstallUsersGroupsPivot' => $vendorDir . '/cartalyst/sentry/src/migrations/2012_12_06_225945_migration_cartalyst_sentry_install_users_groups_pivot.php',
    'MtMoisTipster' => $baseDir . '/app/models/MtMoisTipster.php',
    'MtMoisTipsterController' => $baseDir . '/app/controllers/MtMoisTipsterController.php',
    'MtUniteLogs' => $baseDir . '/app/models/MtUniteLogs.php',
    'MtUniteLogsController' => $baseDir . '/app/controllers/MtUniteLogsController.php',
    'Normalizer' => $vendorDir . '/patchwork/utf8/src/Normalizer.php',
    'Pari' => $baseDir . '/app/models/Pari.php',
    'PariController' => $baseDir . '/app/controllers/PariController.php',
    'ProfileController' => $baseDir . '/app/controllers/ProfileController.php',
    'Rap2hpoutre\\LaravelLogViewer\\LogViewerController' => $vendorDir . '/rap2hpoutre/laravel-log-viewer/src/controllers/LogViewerController.php',
    'RemindersController' => $baseDir . '/app/controllers/RemindersController.php',
    'Scope' => $baseDir . '/app/models/Scope.php',
    'ScopeTableSeeder' => $baseDir . '/app/database/seeds/ScopeTableSeeder.php',
    'Selection' => $baseDir . '/app/models/Selection.php',
    'SelectionController' => $baseDir . '/app/controllers/SelectionController.php',
    'SelectionTableSeeder' => $baseDir . '/app/database/seeds/SelectionTableSeeder.php',
    'SessionHandlerInterface' => $vendorDir . '/symfony/http-foundation/Symfony/Component/HttpFoundation/Resources/stubs/SessionHandlerInterface.php',
    'Sport' => $baseDir . '/app/models/Sport.php',
    'SportMarket' => $baseDir . '/app/models/SportMarket.php',
    'SportScope' => $baseDir . '/app/models/SportScope.php',
    'SportTableSeeder' => $baseDir . '/app/database/seeds/SportTableSeeder.php',
    'StatsController' => $baseDir . '/app/controllers/StatsController.php',
    'TermineParis' => $baseDir . '/app/models/TermineParis.php',
    'TermineParisController' => $baseDir . '/app/controllers/TermineParisController.php',
    'TestCase' => $baseDir . '/app/tests/TestCase.php',
    'Tipster' => $baseDir . '/app/models/Tipster.php',
    'TipsterController' => $baseDir . '/app/controllers/TipsterController.php',
    'TipsterTableSeeder' => $baseDir . '/app/database/seeds/TipsterTableSeeder.php',
    'Transaction' => $baseDir . '/app/models/Transaction.php',
    'TransactionController' => $baseDir . '/app/controllers/TransactionController.php',
    'TypeParisTableSeeder' => $baseDir . '/app/database/seeds/TypeParisTableSeeder.php',
    'User' => $baseDir . '/app/models/User.php',
    'UserController' => $baseDir . '/app/controllers/UserController.php',
    'UserTableSeeder' => $baseDir . '/app/database/seeds/UserTableSeeder.php',
    'WelcomeController' => $baseDir . '/app/controllers/WelcomeController.php',
    'Whoops\\Module' => $vendorDir . '/filp/whoops/src/deprecated/Zend/Module.php',
    'Whoops\\Provider\\Zend\\ExceptionStrategy' => $vendorDir . '/filp/whoops/src/deprecated/Zend/ExceptionStrategy.php',
    'Whoops\\Provider\\Zend\\RouteNotFoundStrategy' => $vendorDir . '/filp/whoops/src/deprecated/Zend/RouteNotFoundStrategy.php',
    'lib\\gestion\\UserGestion' => $baseDir . '/app/lib/gestion/UserGestion.php',
    'lib\\gestion\\UserGestionInterface' => $baseDir . '/app/lib/gestion/UserGestionInterface.php',
    'lib\\pari\\PariAffichage' => $baseDir . '/app/lib/pari/PariAffichage.php',
    'lib\\pari\\PariAffichageInterface' => $baseDir . '/app/lib/pari/PariAffichageInterface.php',
    'lib\\validation\\BaseValidator' => $baseDir . '/app/lib/validation/BaseValidator.php',
    'lib\\validation\\UserCreateValidator' => $baseDir . '/app/lib/validation/UserCreateValidator.php',
    'lib\\validation\\UserLoginValidator' => $baseDir . '/app/lib/validation/UserLoginValidator.php',
    'lib\\validation\\ValidatorInterface' => $baseDir . '/app/lib/validation/ValidatorInterface.php',
);
