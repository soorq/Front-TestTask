'use client';

import { InputProps, Input } from '~&/src/shared/ui/input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Button } from '~&/src/shared/ui/button';
import { forwardRef, useState } from 'react';
import { cn } from '~&/src/shared/lib/utils';

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const disabled =
            props.value === '' || props.value === undefined || props.disabled;

        return (
            <div className="relative w-full">
                <Input
                    type={showPassword ? 'text' : 'password'}
                    className={cn(
                        'hide-password-toggle border-none',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-0 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(prev => !prev)}
                    disabled={disabled}
                >
                    {showPassword && !disabled ? (
                        <EyeIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                        <EyeOffIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                    <span className="sr-only">
                        {showPassword ? 'Hide password' : 'Show password'}
                    </span>
                </Button>

                {/* hides browsers password toggles */}
                <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
            </div>
        );
    }
);
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
