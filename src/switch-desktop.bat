@echo off
setlocal
SETLOCAL ENABLEDELAYEDEXPANSION
for /r %%f in (*.component.ts*) do (
	REM suuliin hoyor huvisagchaar togsson string-uudiig ehnii string-eer solij tavina
	call :FindReplace ".desktop.html" %%f ".html" ".mobile.html"
	call :FindReplace ".desktop.css" %%f ".css" ".mobile.css"
)
exit /b 

:FindReplace <findstr> <replstr> <file>
set tmp="%temp%\tmp.txt"
If not exist %temp%\_.vbs call :MakeReplace
for /f "tokens=*" %%a in ('dir "%2" /s /b /a-d /on') do (
  for /f "usebackq" %%b in (`Findstr /mic:"%%~na%~3" "%%a"`) do (
  	set destiny=%%~pa%%~na%~1
    if exist !destiny! (
    	echo(&Echo Replacing "%%~na%~3" with "%%~na%~1" in file %%~nxa
    	<%%a cscript //nologo %temp%\_.vbs "%%~na%~3" "%%~na%~1">%tmp%
    	if exist %tmp% move /Y %tmp% "%%~dpnxa">nul
    )
  )
  for /f "usebackq" %%b in (`Findstr /mic:"%%~na%~4" "%%a"`) do (
  	set destiny=%%~pa%%~na%~1
    if exist !destiny! (
    	echo(&Echo Replacing "%%~na%~4" with "%%~na%~1" in file %%~nxa
    	<%%a cscript //nologo %temp%\_.vbs "%%~na%~4" "%%~na%~1">%tmp%
    	if exist %tmp% move /Y %tmp% "%%~dpnxa">nul
    )
  )
)
del %temp%\_.vbs
exit /b

:MakeReplace
>%temp%\_.vbs echo with Wscript
>>%temp%\_.vbs echo set args=.arguments
>>%temp%\_.vbs echo .StdOut.Write _
>>%temp%\_.vbs echo Replace(.StdIn.ReadAll,args(0),args(1),1,-1,1)
>>%temp%\_.vbs echo end with