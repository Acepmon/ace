@echo off
SETLOCAL ENABLEDELAYEDEXPANSION
SET old=.mobile
SET new=.desktop
for /r %%f in (*.mobile*) do (
	SET newname=%%f
	SET newname=!newname:%old%=!
	if exist !newname! (
		SET temp=%%f
		move "!newname!" "!temp:%old%=%new%!"
	)
	move "%%f" "!newname!"
)