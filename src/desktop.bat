@echo off
SETLOCAL ENABLEDELAYEDEXPANSION
SET old=.desktop
SET new=.mobile
for /r %%f in (*.desktop*) do (
	SET newname=%%f
	SET newname=!newname:%old%=!
	if exist !newname! (
		SET temp=%%f
		move "!newname!" "!temp:%old%=%new%!"
	)
	move "%%f" "!newname!"
)