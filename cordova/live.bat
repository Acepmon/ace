@echo off
SETLOCAL ENABLEDELAYEDEXPANSION
SET old=-live
SET new=-build
for %%f in (*config-live*) do (
	SET newname=%%f
	SET newname=!newname:%old%=!
	if exist !newname! (
		SET temp=%%f
		move "!newname!" "!temp:%old%=%new%!"
	)
	move "%%f" "!newname!"
)